"use client";
import { usePathname } from "next/navigation";
import { MekuriLayout } from "@/packages/mekuri/src";

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
   const router = usePathname();
   return (
      <main className="ly_main">
         <MekuriLayout
            componentArr={componentArr}
            scrollRestoration="top"
            mode="sync"
            router={router}>
            {children}
         </MekuriLayout>
      </main>
   );
};
