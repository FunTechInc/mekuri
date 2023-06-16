"use client";

import styles from "./child.module.scss";

import React, { useRef, memo } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";

import { useMekuriAnimation, useMekuriDuration } from "@/packages/mekuri/src";

function Child() {
   return (
      <Animation>
         <div className={`${styles.textbox} textBlock`}>
            <h2>
               FunTechと一緒にクリエイティブをしていただける
               <br />
               エンジニアの方を探しています!
            </h2>
            <p>
               フリーランス、新卒、転職活動中の方、年齢やご経験は問いませんので、お気軽にお声かけくださいませ！
            </p>
            <Link href="https://twitter.com/tkm_hmng8" target="_blank">
               お気軽にDMください！
            </Link>
         </div>
         <Image
            className={styles.funkun}
            src="/funkun.svg"
            width={400}
            height={600}
            alt="ファンくん"
         />
      </Animation>
   );
}

const Animation = ({ children }: { children: React.ReactNode }) => {
   const ref = useRef(null);
   const duration = useMekuriDuration();
   useMekuriAnimation({
      isReRender: true,
      mode: "wait",
      leave: () => {
         gsap.context(() => {
            gsap.to(".textBlock", {
               scale: 1.2,
               duration: duration?.second,
               ease: "power3.out",
            });
         }, ref.current!);
      },
      enter: () => {
         gsap.context(() => {
            gsap.fromTo(
               ".textBlock",
               {
                  scale: 1.2,
               },
               {
                  scale: 1,
                  duration: duration?.second,
                  ease: "power3.out",
               }
            );
         }, ref.current!);
      },
   });
   return (
      <div ref={ref} className={styles.wrapper}>
         {children}
      </div>
   );
};

export default memo(Child);
