"use client";

import { usePathname } from "next/navigation";
import { MekuriContext } from "@/packages/mekuri/src";
import { useCallback, useRef } from "react";
import Lenis from "lenis";
import { useLenis } from "@/app/_hooks/useLenis";

export const PageTransitionContext = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   const pathname = usePathname();
   const lenisRef = useRef<Lenis>();
   const lenis = useLenis((s) => s.lenis);
   if (lenis) lenisRef.current = lenis;
   const handleLenis = useCallback((pos: number) => {
      lenisRef.current?.scrollTo(pos, {
         immediate: true,
         force: true,
         lock: true,
      });
   }, []);
   return (
      <MekuriContext
         millisecond={1200}
         scrollRestoration={{
            scrollRestoration: "restore",
            onLeave: (pos, isPopstate) => {
               if (!isPopstate) {
                  handleLenis(pos);
               }
            },
            onEnter: (pos, isPopstate) => {
               if (isPopstate) {
                  handleLenis(pos);
               }
            },
         }}
         mode="sync"
         waitOnPopstate={true}
         trigger={pathname}>
         {children}
      </MekuriContext>
   );
};
