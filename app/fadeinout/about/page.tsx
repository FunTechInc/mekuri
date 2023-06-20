"use client";

import { useRef, memo, useEffect } from "react";
import s from "./style.module.scss";
import { gsap } from "gsap";
import { InfinitSlider } from "../../_utils/InfinitTxt";
import { useMekuriAnimation, useMekuriDuration } from "@/packages/mekuri/src";
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
         href="/fadeinout/about/recruit"
         ref={ref}
         className={`${s.box} ${className}`}>
         <h1 className="slideText">{title}</h1>
         <h1 className="slideText">{title}</h1>
      </Link>
   );
};

const About = () => {
   return (
      <Animation>
         <div className={s.mv}>
            <Image
               src="/camp.jpg"
               width={1200}
               height={630}
               alt="キャンプにみんなでいきました"
            />
         </div>
         <div id="test">
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
      </Animation>
   );
};

const Animation = ({ children }: { children: React.ReactNode }) => {
   const ref = useRef(null);
   const duration = useMekuriDuration();
   useMekuriAnimation({
      isReRender: true,
      mode: "wait",
      leave: ({ next }) => {
         gsap.context(() => {
            gsap.to(".fadein", {
               x: function (index) {
                  if (index % 2 === 0) {
                     return -80;
                  } else {
                     return 80;
                  }
               },
               scale: function () {
                  return next === "/fadeinout/about/recruit" ? 2 : 1;
               },
               duration: duration?.second,
               ease: "power3.out",
               stagger: {
                  each: 0.05,
               },
            });
         }, ref.current!);
      },
      enter: ({ getHashPos }) => {
         const hashPos = getHashPos();
         if (hashPos) {
            window.scrollTo({ top: hashPos });
         }
         gsap.context(() => {
            gsap.fromTo(
               ".fadein",
               {
                  x: function (index) {
                     if (index % 2 === 0) {
                        return -80;
                     } else {
                        return 80;
                     }
                  },
               },
               {
                  x: 0,
                  scale: 1,
                  duration: duration?.second,
                  ease: "power3.out",
                  stagger: {
                     each: 0.05,
                  },
               }
            );
         }, ref.current!);
      },
   });

   return (
      <div className={s.wrapper} ref={ref}>
         {children}
      </div>
   );
};

export default memo(About);
