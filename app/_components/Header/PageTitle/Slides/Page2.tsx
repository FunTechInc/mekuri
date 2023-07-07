"use client";

import gsap from "gsap";
import { useRef } from "react";
import { useMekuriAnimation, useMekuriDuration } from "@/packages/mekuri/src";

const Slide = () => {
   const ref = useRef(null);
   const { second } = useMekuriDuration();

   useMekuriAnimation({
      isReRender: true,
      leave: () => {
         gsap.to(ref.current, {
            opacity: 0,
            x: -100,
            duration: second,
            ease: "power3.out",
         });
      },
      enter: () => {
         gsap.fromTo(
            ref.current,
            {
               x: 100,
               opacity: 0,
            },
            {
               x: 0,
               opacity: 1,
               duration: second,
               ease: "power3.out",
            }
         );
      },
   });
   return <p ref={ref}>Page2Page2Page2Page2</p>;
};

export default Slide;
