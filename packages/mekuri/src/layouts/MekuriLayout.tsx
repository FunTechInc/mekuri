import { useReducer } from "react";
import {
   componentReducer,
   useComponentUpdateEffect,
} from "./utils/updateComponent.ts";
import { getCurrentComponent } from "./utils/getComponent.ts";
import { useUnmountPrevEffect } from "./utils/unmountComponent.ts";
import { useScrollRestoration } from "./utils/useScrollRestoration.ts";
import {
   useMekuriDuration,
   useConstantState,
} from "../context/MekuriContext.tsx";
import { useIsMatchRouting } from "../utils/useIsMatchRouting.ts";

/*===============================================
type
===============================================*/

interface IMekuriLayoutProps {
   children: React.ReactNode;
   router: string;
}

/**
 * MekuriLayout
 * @param props
 */

export const MekuriLayout = ({ router, children }: IMekuriLayoutProps) => {
   /*===============================================
	get state from context
	===============================================*/
   const { millisecond } = useMekuriDuration();
   const { routing, scrollRestoration, mode } = useConstantState();
   if (!routing || !mode || !scrollRestoration) {
      throw new Error("routing is null");
   }

   /*===============================================
	Whether it applies to routing or not.
	===============================================*/
   const isMatchRouting = useIsMatchRouting({ router, routing });

   /*===============================================
	１get current component
	===============================================*/
   const [state, dispatch] = useReducer(componentReducer, {
      current: getCurrentComponent({ routing, router, children }),
      next: null,
      restorePos: {
         key: router,
         pos: 0,
      },
   });

   /*===============================================
	2 update component
	===============================================*/
   useComponentUpdateEffect({
      router,
      mode,
      millisecond,
      state,
      routing,
      children,
      dispatch,
      isMatchRouting,
   });

   /*===============================================
	3 unmount
	===============================================*/
   useUnmountPrevEffect({
      state,
      mode,
      millisecond,
      dispatch,
      isMatchRouting,
   });

   /*===============================================
	4 scroll restoration
	===============================================*/
   useScrollRestoration({ scrollRestoration, state });

   /*===============================================
	5 render
	===============================================*/
   return (
      <>
         {isMatchRouting ? (
            <div>
               {state.current && state.current}
               {state.next && state.next}
            </div>
         ) : (
            <div>{children}</div>
         )}
      </>
   );
};
