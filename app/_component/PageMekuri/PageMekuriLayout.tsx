"use client";

import { useReducer, memo } from "react";
import { usePathname } from "next/navigation";
import {
   componentReducer,
   useComponentUpdateEffect,
} from "./utils/updateComponent";
import { getCurrentComponent } from "./utils/getComponent";
import { useUnmountPrevEffect } from "./utils/unmountComponent";
import { IProps } from "./types";
import { useScrollRestoration } from "./utils/useScrollRestoration";

/**
 * PageMekuriLayout
 * @param props
 */

const PageMekuriLayout = ({
   componentArr,
   mode,
   children,
   duration,
   scrollRestoration,
}: IProps) => {
   /*===============================================
	１get current component
	===============================================*/
   const pathName = usePathname();
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
      duration,
      state,
      componentArr,
      children,
      dispatch,
   });

   /*===============================================
	3 unmount
	===============================================*/
   useUnmountPrevEffect({ state, mode, duration, dispatch });

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
};

export default memo(PageMekuriLayout);
