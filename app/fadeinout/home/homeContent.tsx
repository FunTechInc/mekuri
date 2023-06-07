"use client";
import { gsap } from "gsap";
import styles from "./style.module.scss";
import { usePageMekuriAnimation } from "../../_hook/usePageMekuriAnimation";
import { useRef } from "react";
import { PAGEMEKURISTATE } from "../../_context/usePageMekuriStore";
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
   console.log("render");
   const ref = useRef<HTMLDivElement>(null);
   usePageMekuriAnimation({
      isReRender: true,
      stateName: PAGEMEKURISTATE.mekuri.name,
      leave: ({ prev, next }) => {
         console.log(next);
         if (prev === "/") return;
         gsap.context(() => {
            gsap.to(".fadeIn", {
               y: -80,
               duration: PAGEMEKURISTATE.mekuri.second(),
               ease: "power3.out",
               stagger: {
                  each: 0.05,
               },
            });
         }, ref.current!);
      },
      enter: ({ prev }) => {
         if (prev === "/") return;
         gsap.context(() => {
            gsap.fromTo(
               ".fadeIn",
               {
                  opacity: 0,
                  y: 80,
               },
               {
                  opacity: 1,
                  y: 0,
                  duration: PAGEMEKURISTATE.mekuri.second(),
                  ease: "power2.out",
                  stagger: {
                     each: 0.05,
                  },
               }
            );
         }, ref.current!);
      },
   });

   return (
      <>
         <div ref={ref} className={styles.wrapper}>
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
               description="ページメクリはNext13のappディレクトリでページ遷移アニメーションをするためのデモです。React-transition-groupやframer motion,react-springといったDOMライブラリを使わず、ページ遷移アニメーションが可能です。`wait`と`sync`モードや、popstate（popstate時のスクロール位置の保存(scroll restration)）にも対応しています。アニメーションはコンポーネント単位で設定可能なので、gsapなどのアニメーションライブラリを使って柔軟に実装ができます。"
               eng="page-mekuri is a demo for creating page transition animations in the app directory of Next13. It allows you to do page transition animations without using DOM libraries like React-transition-group, framer motion, or react-spring. It also supports wait and sync modes, as well as popstate (saving scroll position at the time of popstate, also known as scroll restoration). Since animations can be set per component, you can flexibly implement them using animation libraries like gsap."
            />
            <Link href="/about" className={`${styles.campImage} fadeIn`}>
               <p>アバウト</p>
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
