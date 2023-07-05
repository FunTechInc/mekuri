"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import s from "./curtain.module.scss";

import {
   MekuriLayout,
   useMekuriAnimation,
   useMekuriDuration,
} from "@/packages/mekuri/src";

/*===============================================
pageMekuriLayoutに渡すコンポーネントの配列
===============================================*/
import About from "../about/page";
import Child from "../about/[id]/page";
import Home from "../page";
import { usePathname } from "next/navigation";

const componentArr = [
   { path: "/curtain/about/★", children: <Child /> },
   { path: "/curtain/about", children: <About /> },
   { path: "/curtain", children: <Home /> },
];

export const CurtainLayout = ({ children }: { children: React.ReactNode }) => {
   const router = usePathname();
   return (
      <Animation>
         <MekuriLayout
            pages={componentArr}
            mode="wait"
            scrollRestoration="restore"
            router={router}>
            {children}
         </MekuriLayout>
      </Animation>
   );
};

const Animation = ({ children }: { children: React.ReactNode }) => {
   const ref = useRef(null);

   const duration = useMekuriDuration();
   useMekuriAnimation({
      isReRender: false,
      mode: "wait",
      leave: ({ isCurrent }) => {
         if (isCurrent(["/"])) return;
         gsap.to(ref.current, {
            y: 0,
            duration: duration.second,
            ease: "power3.out",
         });
      },
      enter: ({ isPrev }) => {
         if (isPrev(["/"])) return;
         gsap.to(ref.current, {
            y: "100%",
            duration: duration.second,
            ease: "power3.out",
         });
      },
   });
   return (
      <main className="ly_main">
         {children}
         <div ref={ref} className={s.curtain}></div>
      </main>
   );
};
