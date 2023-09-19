"use client";

import { useMekuriAnimation, useMekuriDuration } from "@/packages/mekuri/src";
import { useRef } from "react";
import { gsap } from "gsap";

import s from "./index.module.scss";

export const SampleAnimation = ({
   children,
   dir,
}: {
   children: React.ReactNode;
   dir: "x" | "y";
}) => {
   const ref = useRef(null);
   const { second } = useMekuriDuration();
   useMekuriAnimation({
      onOnce: (_, isInitial) => {
         if (!isInitial) {
            gsap.context(() => {
               gsap.to("h1", {
                  opacity: 1,
                  duration: second,
                  ease: "power3.out",
               });
            }, ref.current!);
         }
      },
      onEnter: ({ intersectionObserver }) => {
         intersectionObserver(ref, (isIntersecting) => {
            if (isIntersecting) {
               gsap.context(() => {
                  gsap.fromTo(
                     "h1",
                     {
                        opacity: 0,
                        y: dir === "y" ? 24 : 0,
                        x: dir === "x" ? 24 : 0,
                     },
                     {
                        opacity: 1,
                        y: 0,
                        x: 0,
                        duration: second,
                        ease: "power3.out",
                        stagger: {
                           each: 0.02,
                        },
                     }
                  );
               }, ref.current!);
            } else {
               gsap.context(() => {
                  gsap.set("h1", {
                     opacity: 1,
                  });
               }, ref.current!);
            }
         });
      },
      onLeave: () => {
         gsap.context(() => {
            gsap.to("h1", {
               y: dir === "y" ? -24 : 0,
               x: dir === "x" ? -24 : 0,
               duration: second,
               ease: "power3.out",
               stagger: {
                  each: 0.02,
               },
            });
         }, ref.current!);
      },
   });
   return (
      <div ref={ref} className={s.wrapper}>
         {children}
      </div>
   );
};
