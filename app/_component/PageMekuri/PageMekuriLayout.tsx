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
	css moduleの対応
	===============================================*/
   /**
    * NextJS will remove module.css property from HTML document when route change
    * This hake allows to copy this CSS to avoid page style clip on page play-out transition
    * MAXI tricky but no choice. Farmer Motion got the same issue
    * https://github.com/vercel/next.js/discussions/18724#discussioncomment-967618
    *
    */
   // const copies = useRef([]);
   // const onLoad = (): void => {
   //    resetStyleCopies();
   //    // Create a clone of every <style> and <link> that currently affects the page. It doesn't matter
   //    // if Next.js is going to remove them or not since we are going to remove the copies ourselves
   //    // later on when the transition finishes.
   //    const nodes = Array.from(
   //       document.querySelectorAll("link[rel=stylesheet], style:not([media=x])")
   //    );
   //    copies.current = nodes.map((el) => el.cloneNode(true));
   //    for (let copy of copies.current) {
   //       // Remove Next.js' data attributes so the copies are not removed from the DOM in the route
   //       // change process.
   //       copy.removeAttribute("data-n-p");
   //       copy.removeAttribute("data-n-href");
   //       // Add duplicated nodes to the DOM.
   //       document.head.appendChild(copy);
   //    }
   // };
   // // Remove previous page's styles after the transition has finalized.
   // const resetStyleCopies = (): void => {
   //    for (let copy of copies.current) {
   //       document.head.removeChild(copy);
   //    }
   //    copies.current = [];
   // };

   // useIsomorphicLayoutEffect(() => {
   //    Router.events.on("beforeHistoryChange", onLoad);
   //    return () => {
   //       Router.events.off("beforeHistoryChange", onLoad);
   //    };
   // }, []);

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
      </>
   );
};

export default memo(PageMekuriLayout);
