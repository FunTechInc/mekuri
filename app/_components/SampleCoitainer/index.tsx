"use client";

import { useMekuri, useMekuriDuration } from "@/packages/mekuri/src";
import { useRef } from "react";
import gsap from "gsap";
import s from "./sample.module.scss";

export const SampleCoitainer = ({
   children,
   className,
   style,
}: {
   children: React.ReactNode;
   className?: string;
   style?: React.CSSProperties;
}) => {
   const { second } = useMekuriDuration();
   const ref = useRef<HTMLDivElement>(null);
   useMekuri({
      onLeave: ({ isPopstate, yPosBeforeLeave }) => {
         if (isPopstate) {
            gsap.to(ref.current, {
               opacity: "0",
               duration: second,
               ease: "power3.inOut",
            });
         } else {
            gsap.set(ref.current, {
               position: "absolute",
               top: yPosBeforeLeave * -1,
            });
            gsap.to(ref.current, {
               y: "-80svh",
               scale: 0.8,
               opacity: 0,
               duration: second,
               ease: "back.inOut(1)",
            });
         }
      },
      onEnter: ({ isPopstate }) => {
         if (isPopstate) {
            gsap.fromTo(
               ref.current,
               {
                  opacity: "0",
               },
               {
                  opacity: 1,
                  duration: second,
                  ease: "power2.out",
               }
            );
         } else {
            gsap.fromTo(
               ref.current,
               {
                  y: "100svh",
               },
               {
                  y: 0,
                  duration: second,
                  ease: "back.inOut(1.8)",
               }
            );
         }
      },
   });
   return (
      <div
         ref={ref}
         style={{ ...style }}
         className={`${s.sample} ${className}`}>
         {children}
      </div>
   );
};
