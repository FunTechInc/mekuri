"use client";

import { useRef, memo, useEffect } from "react";
import styles from "./style.module.scss";
import { usePageMekuriAnimation } from "../../_hook/usePageMekuriAnimation";
import { gsap } from "gsap";
import { PAGEMEKURISTATE } from "../../_context/usePageMekuriStore";
import { InfinitSlider } from "../../_utils/InfinitTxt";

import Image from "next/image";
import Link from "next/link";

interface IBox {
   title: string;
   className: string;
   dir: 1 | -1;
}

const Box = ({ title, className, dir }: IBox) => {
   const ref = useRef(null);
   useEffect(() => {
      const infinit = new InfinitSlider(ref.current!, "slideText", {
         duration: 80,
         dir: dir,
      }).init();
      infinit.play();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   return (
      <Link
         href="/fadeinout/about/recruit"
         ref={ref}
         className={`${styles.box} ${className}`}>
         <h1 className="slideText">{title}</h1>
         <h1 className="slideText">{title}</h1>
      </Link>
   );
};

function About() {
   const ref = useRef(null);
   usePageMekuriAnimation({
      isReRender: true,
      mode: "wait",
      stateName: PAGEMEKURISTATE.mekuri.name,
      leave: ({ next }) => {
         gsap.context(() => {
            gsap.to(".fadein", {
               x: function (index) {
                  if (index % 2 === 0) {
                     return -80;
                  } else {
                     return 80;
                  }
               },
               scale: function () {
                  return next === "/fadeinout/about/recruit" ? 2 : 1;
               },
               duration: PAGEMEKURISTATE.mekuri.second(),
               ease: "power3.out",
               stagger: {
                  each: 0.05,
               },
            });
            gsap.to(".titleSpan", {
               y: -64,
               opacity: 0,
               duration: PAGEMEKURISTATE.mekuri.second(),
               ease: "power3.out",
               stagger: {
                  each: 0.08,
               },
            });
         }, ref.current!);
      },
      enter: () => {
         gsap.context(() => {
            gsap.fromTo(
               ".fadein",
               {
                  x: function (index) {
                     if (index % 2 === 0) {
                        return -80;
                     } else {
                        return 80;
                     }
                  },
               },
               {
                  x: 0,
                  scale: 1,
                  duration: PAGEMEKURISTATE.mekuri.second(),
                  ease: "power3.out",
                  stagger: {
                     each: 0.05,
                  },
               }
            );
            gsap.fromTo(
               ".titleSpan",
               {
                  y: 64,
                  opacity: 0,
               },
               {
                  y: 0,
                  opacity: 1,
                  duration: PAGEMEKURISTATE.mekuri.second(),
                  ease: "power3.out",
                  stagger: {
                     each: 0.08,
                  },
               }
            );
         }, ref.current!);
      },
   });

   return (
      <div className={styles.wrapper} ref={ref}>
         <div className={styles.mv}>
            <div className={styles.titleWrapper}>
               <h2>
                  <span className="titleSpan">Creativity</span>
                  <span className="titleSpan">is</span>
                  <span className="titleSpan">ロマン</span>
               </h2>
            </div>
            <Image
               src="/camp.jpg"
               width={1200}
               height={630}
               alt="キャンプにみんなでいきました"
            />
         </div>
         <div>
            <Box
               title="ファンテックハファンテックハ"
               className="fadein"
               dir={1}
            />
            <Box title="エンジニアヲエンジニアヲ" className="fadein" dir={-1} />
            <Box
               title="ボシュウチュウボシュウチュウ"
               className="fadein"
               dir={1}
            />
         </div>
      </div>
   );
}

export default memo(About);
