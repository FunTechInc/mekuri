import { useReducer, useRef, useMemo } from "react";
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
export type TIsMatchRouting = {
   current: boolean;
   prev: boolean;
   match: boolean;
};

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
   const prevRouter = useRef(router);

   const isMatchRouting = useMemo(() => {
      const isCurrent = getIsMatchRouting(routing, router);
      const isPrev = getIsMatchRouting(routing, prevRouter.current);
      const result: TIsMatchRouting = {
         current: isCurrent,
         prev: isPrev,
         match: isCurrent && isPrev,
      };
      prevRouter.current = router;
      return result;
   }, [routing, router]);

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
         {isMatchRouting.match ? (
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
