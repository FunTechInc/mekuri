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
   const { second } = useMekuriDuration();

   useMekuriAnimation({
      onEveryLeave: () => {
         gsap.to(ref.current, {
            opacity: 0,
            duration: second,
            ease: "power3.out",
         });
      },
      onEveryEnter: () => {
         gsap.to(ref.current, {
            opacity: 1,
            duration: second,
            ease: "power3.out",
         });
      },
   });
   return <div ref={ref}>{children}</div>;
};
