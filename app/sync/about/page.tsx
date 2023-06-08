"use client";
import { useRef, memo, useEffect } from "react";
import syncStyle from "../sync.module.scss";
import styles from "./style.module.scss";
import { usePageMekuriAnimation } from "../../_hook/usePageMekuriAnimation";
import { PAGEMEKURISTATE } from "../../_context/usePageMekuriStore";
import { InfinitSlider } from "../../_utils/InfinitTxt";

import Image from "next/image";
import Link from "next/link";
import { enterAnim, leaveAnim } from "../_utils/transitionAnimation";

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
         href="/sync/about/recruit"
         ref={ref}
         className={`${styles.box} ${className}`}>
         <h1 className="slideText">{title}</h1>
         <h1 className="slideText">{title}</h1>
      </Link>
   );
};

function About() {
   // console.log("about render");
   const ref = useRef(null);
   const wrapperRef = useRef(null);
   usePageMekuriAnimation({
      isReRender: true,
      mode: "sync",
      stateName: PAGEMEKURISTATE.mekuri.name,
      leave: () => {
         leaveAnim(ref);
      },
      enter: () => {
         enterAnim(wrapperRef, ref);
      },
   });

   return (
      <div className={syncStyle.wrapper} ref={wrapperRef}>
         <div className={syncStyle.syncInner} ref={ref}>
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
               <Box
                  title="エンジニアヲエンジニアヲ"
                  className="fadein"
                  dir={-1}
               />
               <Box
                  title="ボシュウチュウボシュウチュウ"
                  className="fadein"
                  dir={1}
               />
            </div>
         </div>
      </div>
   );
}

export default memo(About);
