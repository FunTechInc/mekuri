"use client";

import styles from "./child.module.scss";
import syncStyle from "../../sync.module.scss";
import { useRef, memo } from "react";
import { usePageMekuriAnimation } from "../../../_hook/usePageMekuriAnimation";
import { PAGEMEKURISTATE } from "../../../_context/usePageMekuriStore";
import Image from "next/image";
import Link from "next/link";
import { enterAnim, leaveAnim } from "../../_utils/transitionAnimation";

function Child() {
   const ref = useRef(null);
   const wrapperRef = useRef(null);

   usePageMekuriAnimation({
      isReRender: true,
      mode: "sync",
      stateName: PAGEMEKURISTATE.mekuri.name,
      leave: ({ yPosBeforeLeave }) => {
         leaveAnim(wrapperRef, ref, yPosBeforeLeave);
      },
      enter: () => {
         enterAnim(wrapperRef, ref);
      },
   });

   return (
      <div ref={wrapperRef} className={syncStyle.wrapper}>
         <div ref={ref} className={syncStyle.syncInner}>
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
      </div>
   );
}

export default memo(Child);
