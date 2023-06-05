"use client";
import { gsap } from "gsap";
import styles from "./style.module.scss";
import { usePageMekuriAnimation } from "../_hook/usePageMekuriAnimation";
import { useRef } from "react";
import { PAGEMEKURISTATE } from "../_context/usePageMekuriStore";

const Box = ({ className }: { className: string }) => {
   return (
      <div className={`${styles.box} ${className}`}>
         <h1>HOMEHOME</h1>
         <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae eum
            libero sint. Eveniet voluptatum quibusdam autem laudantium neque
            porro, sapiente ullam iusto excepturi nemo maxime tempora vitae
            expedita, quae architecto.
         </p>
      </div>
   );
};

Box.displayName = "Box";

export const HomeContent = () => {
   const ref = useRef<HTMLDivElement>(null);
   usePageMekuriAnimation({
      isReRender: true,
      stateName: PAGEMEKURISTATE.mekuri.name,
      leave: () => {
         gsap.context(() => {
            gsap.to(".hoge", {
               x: -100,
               duration: PAGEMEKURISTATE.mekuri.second(),
               ease: "power3.out",
               stagger: {
                  each: 0.05,
               },
            });
         }, ref.current!);
      },
      enter: () => {
         gsap.context(() => {
            gsap.fromTo(
               ".hoge",
               {
                  x: 100,
               },
               {
                  x: 0,
                  duration: PAGEMEKURISTATE.mekuri.second(),
                  ease: "power2.out",
                  stagger: {
                     each: 0.05,
                  },
               }
            );
         }, ref.current!);
      },
   });

   return (
      <>
         <div ref={ref} className={styles.wrapper}>
            <Box className="hoge" />
            <Box className="hoge" />
            <Box className="hoge" />
         </div>
      </>
   );
};
