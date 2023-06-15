"use client";

import { usePathname } from "next/navigation";
import { MekuriContext } from "@/packages/page-mekuri/src";

export const PageTransitionContext = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   const pathname = usePathname();
   return (
      //TODO:パスネームになってるとこrouterに直す
      <MekuriContext millisecond={1000} preventArr={["/"]} pathName={pathname}>
         {children}
      </MekuriContext>
   );
};
