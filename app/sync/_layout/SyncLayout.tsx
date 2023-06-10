"use client";

import PageMekuriLayout from "../../_component/PageMekuri/PageMekuriLayout";
import { PAGEMEKURISTATE } from "../../_context/usePageMekuriStore";

/*===============================================
pageMekuriLayoutに渡すコンポーネントの配列
===============================================*/
import About from "../about/page";
import Child from "../about/[id]/page";
import Home from "../page";

const componentArr = [
   { path: "/sync/about/★", component: <Child /> },
   { path: "/sync/about", component: <About /> },
   { path: "/sync", component: <Home /> },
];

export const SyncLayout = ({ children }: { children: React.ReactNode }) => {
   const state = PAGEMEKURISTATE.mekuri;
   return (
      <main className="ly_main">
         <PageMekuriLayout
            duration={state.duration}
            componentArr={componentArr}
            scrollRestoration="top"
            mode="sync">
            {children}
         </PageMekuriLayout>
      </main>
   );
};
