"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { PAGEMEKURISTATE } from "../../app-hooks";

import {
   PageMekuriLayout,
   usePageMekuriAnimation,
} from "@/packages/page-mekuri/src";

/*===============================================
pageMekuriLayoutに渡すコンポーネントの配列
===============================================*/
import About from "../about/page";
import Child from "../about/[id]/page";
import Home from "../page";

const componentArr = [
   { path: "/fadeinout/about/★", component: <Child /> },
   { path: "/fadeinout/about", component: <About /> },
   { path: "/fadeinout", component: <Home /> },
];

export const FadeInOutLayout = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   const ref = useRef(null);
   usePageMekuriAnimation({
      isReRender: false,
      mode: "wait",
      leave: ({ isCurrent }) => {
         if (isCurrent(["/"])) return;
         gsap.to(ref.current, {
            opacity: 0,
            duration: PAGEMEKURISTATE.second(),
         });
      },
      enter: ({ isPrev }) => {
         if (isPrev(["/"])) return;
         gsap.to(ref.current, {
            opacity: 1,
            duration: PAGEMEKURISTATE.second(),
         });
      },
   });
   return (
      <main ref={ref} className="ly_main">
         <PageMekuriLayout
            componentArr={componentArr}
            mode="wait"
            scrollRestoration="restore"
            millisecond={PAGEMEKURISTATE.millisecond}>
            {children}
         </PageMekuriLayout>
      </main>
   );
};
