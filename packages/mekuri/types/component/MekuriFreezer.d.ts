/// <reference types="react" />
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
export declare const MekuriFreezer: ({ children, routerContext, }: MekuriFreezerProps) => import("react/jsx-runtime").JSX.Element;
export {};
