"use client";

import { useMekuriAnimation, useMekuriDuration } from "@/packages/mekuri/src";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import s from "./index.module.scss";

export const RouterTriggerSample = () => {
   const [state, setState] = useState<number | string>("Trigger Router change");
   const ref = useRef(null);
   const { second } = useMekuriDuration();
   useMekuriAnimation({
      onEveryLeave: (props) => {
         setState(props.nextTrigger ?? "");
         gsap.to(ref.current, {
            rotate: "+=360deg",
            duration: second,
            ease: "power3.out",
            scale: 2,
         });
      },
      onEveryEnter: () => {
         gsap.to(ref.current, {
            duration: second,
            ease: "power3.out",
            scale: 1,
         });
      },
   });
   return (
      <div className={s.wrapper}>
         <p ref={ref}>{state}</p>
      </div>
   );
};
