"use client";

import { useRef } from "react";
import PageMekuriLayout from "../../_component/PageMekuri/PageMekuriLayout";
import { usePageMekuriAnimation } from "../../_hook/usePageMekuriAnimation";
import { gsap } from "gsap";
import { PAGEMEKURISTATE } from "../../_context/usePageMekuriStore";

/*===============================================
pageMekuriLayoutに渡すコンポーネントの配列
===============================================*/
import About from "../about/page";
import Home from "../page";

const componentArr = [
   { path: "/about", component: <About /> },
   { path: "/", component: <Home /> },
];

export const SyncLayout = ({ children }: { children: React.ReactNode }) => {
   const ref = useRef(null);
   const state = PAGEMEKURISTATE.mekuri;
   usePageMekuriAnimation({
      isReRender: false,
      stateName: state.name,
      leave: () => {
         gsap.to(ref.current, {
            opacity: 0,
            duration: state.second(),
         });
      },
      enter: () => {
         gsap.to(ref.current, {
            opacity: 1,
            duration: state.second(),
         });
      },
   });
   return (
      <main ref={ref} className="ly_main">
         <PageMekuriLayout
            duration={state.duration}
            componentArr={componentArr}
            mode="wait">
            {children}
         </PageMekuriLayout>
      </main>
   );
};
