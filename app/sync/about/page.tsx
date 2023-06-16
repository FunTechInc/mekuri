"use client";
import { useRef, memo, useEffect } from "react";
import syncStyle from "../sync.module.scss";
import styles from "./style.module.scss";
import { InfinitSlider } from "../../_utils/InfinitTxt";
import Image from "next/image";
import Link from "next/link";
import { enterAnim, leaveAnim } from "../_utils/transitionAnimation";
import { useMekuriAnimation, useMekuriDuration } from "@/packages/mekuri/src";

interface IBox {
   title: string;
   className: string;
   dir: 1 | -1;
}

const Box = ({ title, className, dir }: IBox) => {
   const ref = useRef(null);

   const inifinitTxt = () => {
      const infinit = new InfinitSlider(ref.current!, "slideText", {
         duration: 80,
         dir: dir,
      }).init();
      infinit.play();
   };

   useMekuriAnimation({
      isReRender: true,
      mode: "sync",
      once: () => {
         inifinitTxt();
      },
      afterEnter: () => {
         inifinitTxt();
      },
   });

   return (
      <Link
         href="/sync/about/recruit"
         ref={ref}
         className={`${styles.box} ${className}`}>
         <h1 className="slideText">{title}</h1>
         <h1 className="slideText">{title}</h1>
      </Link>
   );
};

function About() {
   return (
      <Animation>
         <div className={styles.mv}>
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
      </Animation>
   );
}

const Animation = ({ children }: { children: React.ReactNode }) => {
   const ref = useRef(null);
   const wrapperRef = useRef(null);
   const duration = useMekuriDuration();
   useMekuriAnimation({
      isReRender: true,
      mode: "sync",
      leave: ({ yPosBeforeLeave }) => {
         leaveAnim(wrapperRef, ref, yPosBeforeLeave, duration.second);
      },
      enter: () => {
         enterAnim(ref, duration.second);
      },
   });

   return (
      <div className={syncStyle.wrapper} ref={wrapperRef}>
         <div className={syncStyle.syncInner} ref={ref}>
            {children}
         </div>
      </div>
   );
};

export default memo(About);
