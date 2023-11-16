import { useContext, useRef } from "react";

type MekuriFreezerProps = {
   children: React.ReactNode;
   /** `LayoutRouterContext` must be imported from `"next/dist/shared/lib/app-router-context.shared-runtime"` for Next.js ^13.5 */
   routerContext: React.Context<any>;
};

/**
 * ```jsx
 * import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
 * import { usePathname } from "next/navigation";
 *
 * <Mekuri>
 * 　 <MekuriFreezer key={pathname} routerContext={LayoutRouterContext}>
 * 　  {children}
 *    </MekuriFreezer>
 * </Mekuri>
 * ```
 */
export const MekuriFreezer = ({
   children,
   routerContext,
}: MekuriFreezerProps) => {
   const context = useContext(routerContext);
   const frozen = useRef(context).current;

   return (
      <routerContext.Provider value={frozen}>{children}</routerContext.Provider>
   );
};
