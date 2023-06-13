"use client";

import { PageMekuriLayout } from "../../../packages/page-mekuri";
import { PAGEMEKURISTATE } from "../../app-hooks";

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
   return (
      <main className="ly_main">
         <PageMekuriLayout
            millisecond={PAGEMEKURISTATE.millisecond}
            componentArr={componentArr}
            scrollRestoration="top"
            mode="sync">
            {children}
         </PageMekuriLayout>
      </main>
   );
};
