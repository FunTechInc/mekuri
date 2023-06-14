"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";

interface IBox {
   className: string;
   title: string;
   description: string;
   eng: string;
}

const Box = ({ className, title, description, eng }: IBox) => {
   return (
      <div className={`${styles.box} ${className}`}>
         <h1>{title}</h1>
         <p>{description}</p>
         <p>{eng}</p>
      </div>
   );
};

Box.displayName = "Box";

export const HomeContent = () => {
   return (
      <>
         <div className={styles.wrapper}>
            <Box
               className="fadeIn"
               title="ページメクリ / page-mekuri"
               description="Page MekuriはNext.jsでページ遷移アニメーションするためのパッケージです。`wait`と`sync`モードや、popstate（popstate時のスクロール位置の保存(scroll restration)）にも対応しています。アニメーションはコンポーネント単位で設定可能なので、gsapなどのアニメーションライブラリを使って柔軟に実装ができます。"
               eng="Page Mekuri is a package for page transition animation in Next.js. It supports both 'wait' and 'sync' modes, as well as popstate (scroll position preservation during popstate). Since animations can be set on a per-component basis, you can implement them flexibly using animation libraries such as GSAP."
            />
            <video
               className={`${styles.video} fadeIn`}
               src="/logo-movie.mp4"
               loop
               muted
               autoPlay
               width={1200}
               height={677}
               playsInline={true}></video>
            <Box
               className="fadeIn"
               title="ファンテック / FunTech,inc"
               description="叩き上げの超属人的チーム。多角的視点を持つ突き抜けたクリエイター集団。"
               eng="Creative production team crafting cutting-edge content. Shibuya, Kumamoto, Germany, Netherlands"
            />
            <Link
               href="/curtain/about"
               className={`${styles.campImage} fadeIn`}>
               <Image
                  src="/camp.jpg"
                  width={1200}
                  height={630}
                  alt="キャンプにみんなでいきました"
               />
            </Link>
         </div>
      </>
   );
};
