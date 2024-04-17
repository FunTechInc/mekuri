"use client";

import { useMekuri, useMekuriDuration } from "@/packages/mekuri/src";
import { useRef } from "react";
import { gsap } from "gsap";

import s from "./index.module.scss";

export const SampleAnimation = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   const ref = useRef(null);
   const { second } = useMekuriDuration();

   useMekuri({
      onLeave: ({ isPopstate }) => {
         gsap.context(() => {
            gsap.to("div", {
               y: isPopstate ? "2vw" : "4vw",
               opacity: isPopstate ? 0 : 1,
               duration: second,
               ease: isPopstate ? "power3.out" : "power3.out",
               stagger: 0.04,
            });
         }, ref);
      },
      onEnter: ({ onStylesheetLoad }) => {
         gsap.context(() => {
            gsap.set("div", {
               opacity: 0,
               y: "4vw",
            });
         }, ref);
         // onStylesheetLoad is a function that is called when the stylesheet is loaded.
         onStylesheetLoad(() => {
            gsap.context(() => {
               gsap.to("div", {
                  opacity: 1,
                  y: 0,
                  duration: second,
                  ease: "back.out(8)",
                  stagger: 0.04,
               });
            }, ref);
         });
      },
   });

   return (
      <div ref={ref} className={s.wrapper}>
         {children}
      </div>
   );
};
