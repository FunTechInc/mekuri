"use client";

import gsap from "gsap";
import { useRef } from "react";
import { useMekuriAnimation, useMekuriDuration } from "@/packages/mekuri/src";

export const PageTransitionAnimation = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   const ref = useRef(null);
   const duration = useMekuriDuration();

   useMekuriAnimation({
      isReRender: false,
      leave: () => {
         gsap.to(ref.current, {
            opacity: 0,
            duration: duration.second,
            ease: "power3.out",
         });
      },
      enter: () => {
         gsap.to(ref.current, {
            opacity: 1,
            duration: duration.second,
            ease: "power3.out",
         });
      },
   });
   return <div ref={ref}>{children}</div>;
};
