"use client";

import { useRef, memo } from "react";
import styles from "./style.module.scss";
import { usePageTransitionAnimation } from "../_hook/usePageTransitionAnimation";
import { gsap } from "gsap";
import { PAGEMEKURISTATE } from "../_context/use-app-store";

interface IBox {
   title: string;
   color: string;
   className: string;
}

const Box = ({ title, color, className }: IBox) => {
   return (
      <div className={`${styles.box} ${styles[color]} ${className}`}>
         <h1>{title}</h1>
      </div>
   );
};

function About() {
   const ref = useRef(null);
   usePageTransitionAnimation({
      isReRender: true,
      stateName: PAGEMEKURISTATE.mekuri.name,
      leave: () => {
         gsap.context(() => {
            gsap.to(".fadein", {
               y: 80,
               duration: 1,
               ease: "power3.out",
               stagger: {
                  each: 0.05,
               },
            });
         }, ref.current!);
      },
      enter: () => {
         gsap.fromTo(
            ".fadein",
            {
               y: 80,
            },
            {
               y: 0,
               duration: 1,
               ease: "power3.out",
               stagger: {
                  each: 0.05,
               },
            }
         );
      },
   });
   return (
      <div ref={ref}>
         <Box title="ABOUT" color="blue" className="fadein" />
         <Box title="HOGEHOGE" color="green" className="fadein" />
         <Box title="POYOPOYO" color="red" className="fadein" />
      </div>
   );
}

export default memo(About);
