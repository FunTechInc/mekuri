"use client";

import { useRef } from "react";
import PageMekuriLayout from "../../_component/PageMekuri/PageMekuriLayout";
import { usePageMekuriAnimation } from "../../_hook/usePageMekuriAnimation";
import { gsap } from "gsap";
import { PAGEMEKURISTATE } from "../../_context/usePageMekuriStore";
import styles from "./curtain.module.scss";

/*===============================================
pageMekuriLayoutに渡すコンポーネントの配列
===============================================*/
import About from "../about/page";
import Child from "../about/[id]/page";
import Home from "../page";

const componentArr = [
   { path: "/curtain/about/★", component: <Child /> },
   { path: "/curtain/about", component: <About /> },
   { path: "/curtain", component: <Home /> },
];

export const CurtainLayout = ({ children }: { children: React.ReactNode }) => {
   const ref = useRef(null);
   const state = PAGEMEKURISTATE.mekuri;
   usePageMekuriAnimation({
      isReRender: false,
      mode: "wait",
      stateName: state.name,
      leave: ({ isCurrent }) => {
         if (isCurrent(["/"])) return;
         gsap.to(ref.current, {
            y: 0,
            duration: state.second(),
            ease: "power3.out",
         });
      },
      enter: ({ isPrev }) => {
         if (isPrev(["/"])) return;
         gsap.to(ref.current, {
            y: "100%",
            duration: state.second(),
            ease: "power3.out",
         });
      },
   });
   return (
      <main className="ly_main">
         <PageMekuriLayout
            duration={state.duration}
            componentArr={componentArr}
            mode="wait"
            scrollRestoration="restore">
            {children}
         </PageMekuriLayout>
         <div ref={ref} className={styles.curtain}></div>
      </main>
   );
};
