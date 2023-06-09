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
	１現在のコンポーネントを取得する
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
	2 コンポーネントを更新する
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
	3 css moduleの対応
	===============================================*/

   /*===============================================
	4 アンマウントする
	===============================================*/
   useUnmountPrevEffect({ state, mode, duration, dispatch });

   /*===============================================
	5 scroll restoration
	===============================================*/
   useScrollRestoration({ scrollRestoration, state });

   /*===============================================
	6 render
	===============================================*/
   return (
      <>
         {state.current && state.current}
         {state.next && state.next}
      </>
   );
};

export default memo(PageMekuriLayout);
