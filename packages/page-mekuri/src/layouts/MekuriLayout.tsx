import { useReducer, memo } from "react";
import {
   componentReducer,
   useComponentUpdateEffect,
} from "./utils/updateComponent";
import { getCurrentComponent } from "./utils/getComponent";
import { useUnmountPrevEffect } from "./utils/unmountComponent";
import { useScrollRestoration } from "./utils/useScrollRestoration";
import { IMekuriLayoutProps } from "../type";
import { useMekuriDuration } from "./MekuriContext";

/**
 * MekuriLayout
 * @param props
 */

export const MekuriLayout = memo(function MekuriLayout({
   componentArr,
   mode,
   scrollRestoration,
   pathName,
   children,
}: IMekuriLayoutProps) {
   //durationを持ってくる
   //todo createContextらへんの整理
   const millisecond = useMekuriDuration()!.millisecond;

   /*===============================================
	１get current component
	===============================================*/
   const [state, dispatch] = useReducer(componentReducer, {
      current: getCurrentComponent({ componentArr, pathName, children }),
      next: null,
      restorePos: {
         key: pathName,
         pos: 0,
      },
   });

   /*===============================================
	2 update component
	===============================================*/
   useComponentUpdateEffect({
      pathName,
      mode,
      millisecond,
      state,
      componentArr,
      children,
      dispatch,
   });

   /*===============================================
	3 unmount
	===============================================*/
   useUnmountPrevEffect({ state, mode, millisecond, dispatch });

   /*===============================================
	4 scroll restoration
	===============================================*/
   useScrollRestoration({ scrollRestoration, state });

   /*===============================================
	5 render
	===============================================*/
   return (
      <>
         {state.current && state.current}
         {state.next && state.next}
      </>
   );
});
