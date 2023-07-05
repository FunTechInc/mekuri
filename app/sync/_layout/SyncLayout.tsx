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
   { path: "/sync/about/★", children: <Child /> },
   { path: "/sync/about", children: <About /> },
   { path: "/sync", children: <Home /> },
];

export const SyncLayout = ({ children }: { children: React.ReactNode }) => {
   const router = usePathname();
   return (
      <main className="ly_main">
         <MekuriLayout
            pages={componentArr}
            scrollRestoration="top"
            mode="sync"
            router={router}>
            {children}
         </MekuriLayout>
      </main>
   );
};
