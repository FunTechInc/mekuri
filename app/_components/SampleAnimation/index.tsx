"use client";

import { useMekuriAnimation, useMekuriDuration } from "@/packages/mekuri/src";
import { useRef } from "react";
import { gsap } from "gsap";

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
      onEnter: () => {
         gsap.context(() => {
            gsap.fromTo(
               "h1",
               {
                  y: dir === "y" ? 24 : 0,
                  x: dir === "x" ? 24 : 0,
               },
               {
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
   return <div ref={ref}>{children}</div>;
};
