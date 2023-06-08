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

/**
 * PageMekuriLayout
 * @param props
 */

const PageMekuriLayout = ({
   componentArr,
   mode,
   children,
   duration,
}: IProps) => {
   /*===============================================
	１現在のコンポーネントを取得する
	===============================================*/
   const pathName = usePathname();
   const [state, dispatch] = useReducer(componentReducer, {
      prev: null,
      current: getCurrentComponent({ componentArr, pathName, children }),
      next: null,
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
	5 render
	===============================================*/
   return (
      <>
         {state.prev && state.prev}
         {state.current && state.current}
         {state.next && state.next}
      </>
   );
};

export default memo(PageMekuriLayout);
