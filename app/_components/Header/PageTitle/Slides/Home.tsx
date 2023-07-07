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
            rotate: 90,
            x: -40,
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
   return <p ref={ref}>This is sync transition demo</p>;
};

export default Slide;
