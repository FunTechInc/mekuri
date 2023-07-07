"use client";

import { usePathname } from "next/navigation";
import { MekuriContext } from "@/packages/mekuri/src";

export const PageTransitionContext = ({
   children,
   routing,
}: {
   children: React.ReactNode;
   routing: {
      path: string;
      children: React.ReactNode;
   }[];
}) => {
   const pathname = usePathname();
   return (
      <MekuriContext
         millisecond={1000}
         scrollRestoration="top"
         mode="wait"
         routing={routing}
         router={pathname}>
         {children}
      </MekuriContext>
   );
};
