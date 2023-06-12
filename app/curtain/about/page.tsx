"use client";

import { useRef, memo, useEffect } from "react";
import styles from "./style.module.scss";
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
         href="/curtain/about/recruit"
         ref={ref}
         className={`${styles.box} ${className}`}>
         <h1 className="slideText">{title}</h1>
         <h1 className="slideText">{title}</h1>
      </Link>
   );
};

function About() {
   return (
      <div className={styles.wrapper}>
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
      </div>
   );
}

export default memo(About);
