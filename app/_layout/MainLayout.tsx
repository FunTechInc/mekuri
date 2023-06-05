"use client";

import { useRef } from "react";
import PageTransitionLayout from "../_component/PageTransition/PageTransitionLayout";
import { usePageTransitionAnimation } from "../_hook/usePageTransitionAnimation";
import { gsap } from "gsap";

/*===============================================
pagetransitionLayoutに渡すコンポーネントの配列
===============================================*/
import About from "../about/page";
import Home from "../page";
import { PAGEMEKURISTATE } from "../_context/use-app-store";

const componentArr = [
   { path: "/about", component: <About /> },
   { path: "/", component: <Home /> },
];

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
   const ref = useRef(null);
   usePageTransitionAnimation({
      isReRender: false,
      stateName: PAGEMEKURISTATE.mekuri.name,
      leave: () => {
         gsap.to(ref.current, {
            opacity: 0,
            duration: 1,
         });
      },
      enter: () => {
         gsap.to(ref.current, {
            opacity: 1,
            duration: 1,
         });
      },
   });
   return (
      <main ref={ref} className="layoutWrapper">
         <PageTransitionLayout
            duration={PAGEMEKURISTATE.mekuri.duration}
            componentArr={componentArr}
            mode="wait">
            {children}
         </PageTransitionLayout>
      </main>
   );
};
