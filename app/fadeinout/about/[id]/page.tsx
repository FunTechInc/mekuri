"use client";

import styles from "./child.module.scss";

import { useRef, memo } from "react";
import { usePageMekuriAnimation } from "../../../_hook/usePageMekuriAnimation";
import { gsap } from "gsap";
import { PAGEMEKURISTATE } from "../../../_context/usePageMekuriStore";
import Image from "next/image";
import Link from "next/link";

function Child() {
   const ref = useRef(null);

   usePageMekuriAnimation({
      isReRender: true,
      mode: "wait",
      stateName: PAGEMEKURISTATE.mekuri.name,
      leave: () => {
         gsap.context(() => {
            gsap.to(".textBlock", {
               scale: 2,
               duration: PAGEMEKURISTATE.mekuri.second(),
               ease: "power3.out",
            });
         }, ref.current!);
      },
      enter: () => {
         gsap.context(() => {
            gsap.fromTo(
               ".textBlock",
               {
                  scale: 2,
               },
               {
                  scale: 1,
                  duration: PAGEMEKURISTATE.mekuri.second(),
                  ease: "power3.out",
               }
            );
         }, ref.current!);
      },
   });

   return (
      <div ref={ref} className={styles.wrapper}>
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
      </div>
   );
}

export default memo(Child);
