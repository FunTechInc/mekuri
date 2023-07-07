import { useReducer, memo, useRef } from "react";
import {
   componentReducer,
   useComponentUpdateEffect,
} from "./utils/updateComponent";
import { getCurrentComponent } from "./utils/getComponent";
import { useUnmountPrevEffect } from "./utils/unmountComponent";
import { useScrollRestoration } from "./utils/useScrollRestoration";
import { useMekuriDuration, useConstantState } from "../context/MekuriContext";
import { getIsMatchRouting } from "../utils/getIsMatchRouting";

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

const Layout = ({ router, children }: IMekuriLayoutProps) => {
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
   const prevRouter = useRef(router);
   const isMatchRouting =
      getIsMatchRouting(routing, router) &&
      getIsMatchRouting(routing, prevRouter.current);
   prevRouter.current = router;

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
   useUnmountPrevEffect({ state, mode, millisecond, dispatch, isMatchRouting });

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
            <>
               {state.current && state.current}
               {state.next && state.next}
            </>
         ) : (
            children
         )}
      </>
   );
};

export const MekuriLayout = memo(Layout);
