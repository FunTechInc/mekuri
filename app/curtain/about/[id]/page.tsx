"use client";

import s from "./child.module.scss";
import { memo } from "react";
import Image from "next/image";
import Link from "next/link";

const Child = () => {
   return (
      <div className={s.wrapper}>
         <div className={`${s.textbox} textBlock`}>
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
            className={s.funkun}
            src="/funkun.svg"
            width={400}
            height={600}
            alt="ファンくん"
         />
      </div>
   );
};

export default memo(Child);
