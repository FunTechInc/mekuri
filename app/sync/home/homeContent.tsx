"use client";
import syncStyle from "../sync.module.scss";
import styles from "./style.module.scss";
import { usePageMekuriAnimation } from "../../_hook/usePageMekuriAnimation";
import { useEffect, useRef } from "react";
import { PAGEMEKURISTATE } from "../../_context/usePageMekuriStore";
import Image from "next/image";
import Link from "next/link";
import { enterAnim, leaveAnim } from "../_utils/transitionAnimation";
import { gsap } from "gsap";

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
   const ref = useRef<HTMLDivElement>(null);
   const wrapperRef = useRef<HTMLDivElement>(null);
   console.log("render");
   usePageMekuriAnimation({
      isReRender: true,
      mode: "sync",
      stateName: PAGEMEKURISTATE.mekuri.name,
      once: () => {
         gsap.context(() => {
            gsap.to("video.fadeIn", {
               opacity: 1,
               duration: PAGEMEKURISTATE.mekuri.second(),
            });
         }, ref.current!);
      },
      leave: ({ yPosBeforeLeave }) => {
         leaveAnim(wrapperRef, ref, yPosBeforeLeave);
      },
      enter: ({ isPrev }) => {
         if (isPrev(["/"])) return;
         enterAnim(wrapperRef, ref);
      },
      afterEnter: (props) => {
         gsap.context(() => {
            gsap.to("video.fadeIn", {
               opacity: 1,
               duration: PAGEMEKURISTATE.mekuri.second(),
            });
         }, ref.current!);
      },
   });

   return (
      <>
         <div ref={wrapperRef} className={syncStyle.wrapper}>
            <div ref={ref} className={syncStyle.syncInner}>
               <Box
                  className="fadeIn"
                  title="ページメクリ / page-mekuri"
                  description="ページメクリはNext13のappディレクトリでページ遷移アニメーションをするためのデモです。React-transition-groupやframer motion,react-springといったDOMライブラリを使わず、ページ遷移アニメーションが可能です。`wait`と`sync`モードや、popstate（popstate時のスクロール位置の保存(scroll restration)）にも対応しています。アニメーションはコンポーネント単位で設定可能なので、gsapなどのアニメーションライブラリを使って柔軟に実装ができます。"
                  eng="page-mekuri is a demo for creating page transition animations in the app directory of Next13. It allows you to do page transition animations without using DOM libraries like React-transition-group, framer motion, or react-spring. It also supports wait and sync modes, as well as popstate (saving scroll position at the time of popstate, also known as scroll restoration). Since animations can be set per component, you can flexibly implement them using animation libraries like gsap."
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
                  href="/sync/about"
                  className={`${styles.campImage} fadeIn`}>
                  <Image
                     src="/camp.jpg"
                     width={1200}
                     height={630}
                     alt="キャンプにみんなでいきました"
                  />
               </Link>
            </div>
         </div>
      </>
   );
};
