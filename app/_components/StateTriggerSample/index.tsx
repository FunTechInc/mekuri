"use client";

import { useRef, useState } from "react";
import s from "./index.module.scss";
import {
   Mekuri,
   MekuriContext,
   useMekuriAnimation,
   useMekuriDuration,
} from "@/packages/mekuri/src";
import { gsap } from "gsap";

const StateTitle = ({ state }: { state: number }) => {
   const ref = useRef(null);
   const { second } = useMekuriDuration();
   useMekuriAnimation({
      onEveryLeave: (props) => {
         if (props.currentTrigger === state) {
            gsap.set(ref.current, {
               position: "absolute",
            });
            gsap.to(ref.current, {
               x: "-100%",
               duration: second,
               ease: "power0",
            });
         }
      },
      onEnter: (props) => {
         if (props.nextTrigger === state) {
            gsap.set(ref.current, {
               position: "static",
            });
            gsap.fromTo(
               ref.current,
               {
                  x: "100%",
               },
               {
                  x: 0,
                  duration: second,
                  ease: "power0",
               }
            );
         }
      },
   });
   return (
      <div ref={ref} className={s.titleAnimBlock}>
         {state}
      </div>
   );
};

export const StateTriggerSample = () => {
   const [state, setState] = useState(0);
   const clickHandler = (num: number) => {
      setState(num);
   };
   return (
      <div className={s.wrapper}>
         <h1 className={s.title}>trigger state change</h1>
         <div>
            <div className={s.titleWrapper}>
               <MekuriContext
                  millisecond={600}
                  scrollRestoration="none"
                  mode="sync"
                  trigger={state}>
                  <Mekuri>
                     <StateTitle state={state} key={state} />
                  </Mekuri>
               </MekuriContext>
            </div>
            <div className={s.buttonWrapper}>
               {[...Array(3)].map((_, i) => (
                  <button
                     key={i}
                     onClick={() => {
                        clickHandler(i);
                     }}>
                     state {i}
                  </button>
               ))}
            </div>
         </div>
      </div>
   );
};
