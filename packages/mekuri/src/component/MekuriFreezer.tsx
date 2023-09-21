import { useContext, useRef } from "react";

type TMekuriFreezer = {
   children: React.ReactNode;
   routerContext: React.Context<any>;
};

/**
 * For page transition animation, import LayoutRouterContext from next and set it to routerContext.
 * And don't forget to set key to pathname.
 * { LayoutRouterContext } must be imported from "next/dist/shared/lib/app-router-context.shared-runtime" for Next.js 13.5 and later.
 *
 * ```jsx
 * import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context";
 * import { usePathname } from "next/navigation";
 *
 * <Mekuri>
 * 　 <MekuriFreezer key={pathname} routerContext={LayoutRouterContext}>
 * 　  {children}
 *    </MekuriFreezer>
 * </Mekuri>
 * ```
 *
 * @param routerContext Import LayoutRouterContext from Next. LayoutRouterContext contains context about routing
 *
 * @public
 */
export const MekuriFreezer = ({ routerContext, children }: TMekuriFreezer) => {
   const context = useContext(routerContext);
   const frozen = useRef(context).current;

   return (
      <routerContext.Provider value={frozen}>{children}</routerContext.Provider>
   );
};
