"use client";
import { MekuriFreezer, Mekuri } from "@/packages/mekuri/src";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context";
import { usePathname } from "next/navigation";

export const PageTransitionLayout = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   const pathname = usePathname();
   return (
      <Mekuri>
         <MekuriFreezer key={pathname} routerContext={LayoutRouterContext}>
            {children}
         </MekuriFreezer>
      </Mekuri>
   );
};
