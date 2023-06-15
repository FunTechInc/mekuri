"use client";

import { useRef } from "react";
import { gsap } from "gsap";

import {
   MekuriLayout,
   useMekuriAnimation,
   useMekuriDuration,
} from "@/packages/page-mekuri/src";
// import {
//    PageMekuriLayout,
//    usePageMekuriAnimation,
// } from "@funtech-inc/page-mekuri";

/*===============================================
pageMekuriLayoutに渡すコンポーネントの配列
===============================================*/
import About from "../about/page";
import Child from "../about/[id]/page";
import Home from "../page";
import { usePathname } from "next/navigation";

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
   const router = usePathname();
   //TODO:createContextの型がundifinedを返さないようにする
   const duration = useMekuriDuration();
   useMekuriAnimation({
      isReRender: false,
      mode: "wait",
      leave: ({ isCurrent }) => {
         if (isCurrent(["/"])) return;
         gsap.to(ref.current, {
            opacity: 0,
            duration: duration!.second,
         });
      },
      enter: ({ isPrev }) => {
         if (isPrev(["/"])) return;
         gsap.to(ref.current, {
            opacity: 1,
            duration: duration!.second,
         });
      },
   });
   return (
      <main ref={ref} className="ly_main">
         <MekuriLayout
            componentArr={componentArr}
            mode="wait"
            scrollRestoration="restore"
            pathName={router}>
            {children}
         </MekuriLayout>
      </main>
   );
};
