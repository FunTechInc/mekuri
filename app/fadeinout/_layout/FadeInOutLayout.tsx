"use client";

import { useRef } from "react";
import { gsap } from "gsap";

import {
   MekuriLayout,
   useMekuriAnimation,
   useMekuriDuration,
} from "@/packages/mekuri/src";
// import {
//    MekuriLayout,
//    useMekuriAnimation,
//    useMekuriDuration,
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
   const router = usePathname();
   return (
      <Animation>
         <MekuriLayout
            componentArr={componentArr}
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
            opacity: 0,
            duration: duration.second,
         });
      },
      enter: ({ isPrev }) => {
         if (isPrev(["/"])) return;
         gsap.to(ref.current, {
            opacity: 1,
            duration: duration.second,
         });
      },
   });
   return (
      <main ref={ref} className="ly_main">
         {children}
      </main>
   );
};
