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
   const state = PAGEMEKURISTATE.mekuri;
   usePageMekuriAnimation({
      isReRender: false,
      mode: "wait",
      stateName: state.name,
      leave: ({ isCurrent }) => {
         if (isCurrent(["/"])) return;
         gsap.to(ref.current, {
            opacity: 0,
            duration: state.second(),
         });
      },
      enter: ({ isPrev }) => {
         if (isPrev(["/"])) return;
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
