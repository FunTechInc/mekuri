"use client";

import styles from "./child.module.scss";
import syncStyle from "../../sync.module.scss";
import { useRef, memo } from "react";
import {
   useMekuriAnimation,
   useMekuriDuration,
} from "@/packages/page-mekuri/src";
import Image from "next/image";
import Link from "next/link";
import { enterAnim, leaveAnim } from "../../_utils/transitionAnimation";

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
      <div ref={wrapperRef} className={syncStyle.wrapper}>
         <div ref={ref} className={syncStyle.syncInner}>
            {children}
         </div>
      </div>
   );
};

export default memo(Child);
