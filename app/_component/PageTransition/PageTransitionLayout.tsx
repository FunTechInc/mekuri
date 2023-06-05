"use client";

import { useLayoutEffect, useEffect, useRef, useReducer, memo } from "react";
import { usePathname } from "next/navigation";
import { TPageMekuriDuration } from "@/app/_context/use-app-store";

/*===============================================
types
===============================================*/
type ComponentItem = {
   path: string;
   component: React.ReactElement;
};
type TMode = "sync" | "wait";
interface IProps {
   componentArr: ComponentItem[];
   children: React.ReactNode;
   mode: TMode;
   duration: TPageMekuriDuration;
}
interface IAction {
   type: "update" | "update-unmount" | "unmount-prev";
   component?: React.ReactNode;
}
interface IState {
   prev: React.ReactNode | null;
   current: React.ReactNode | null;
}

/**
 * PageTransitionLayout
 * @param props
 */
const useIsomorphicLayoutEffect =
   typeof document !== "undefined" ? useLayoutEffect : useEffect;

const PageTransitionLayout = ({
   componentArr,
   mode,
   children,
   duration,
}: IProps) => {
   /*===============================================
	現在地のpathから現在のコンポーネントを取得する
	componentArrに一致するものがない場合はchildrenを返す
	===============================================*/
   const pathName = usePathname();
   const getCurrentComponent: () => React.ReactNode = () => {
      const currentComponent = componentArr.find(
         (route) => route.path === pathName
      );
      if (currentComponent) {
         return currentComponent.component;
      } else {
         return children;
      }
   };

   /*===============================================
	componentを更新するstateとreducer
	===============================================*/
   const componentReducer = (state: IState, action: IAction): IState => {
      switch (action.type) {
         case "update":
            return {
               ...state,
               prev: state.current,
               current: action.component || null,
            };
         case "update-unmount":
            return {
               ...state,
               prev: null,
               current: action.component || null,
            };
         case "unmount-prev":
            return {
               ...state,
               prev: null,
            };
         default:
            throw new Error();
      }
   };

   const [state, dispatch] = useReducer(componentReducer, {
      prev: null,
      current: getCurrentComponent(),
   });

   //今のstate.currentとpathnameが対応してるかどうか
   const isCurrentComponentForPath = (path: string) => {
      const currentComponent = componentArr.find(
         (route) => route.path === path
      );
      return currentComponent?.component === state.current;
   };

   /*===============================================
	routerが切り替わるたびにstateを切り替える
	===============================================*/
   const useComponentUpdateEffect = (
      pathName: string,
      mode: TMode,
      duration: number
   ) => {
      const firstRender = useRef(true);
      const timeoutID = useRef<NodeJS.Timeout | number>(0);

      const updateCurrentComponent = () => {
         const currentComponent = getCurrentComponent();
         if (!currentComponent || isCurrentComponentForPath(pathName)) return;

         dispatch({
            type: mode === "wait" ? "update-unmount" : "update",
            component: currentComponent,
         });
      };

      useIsomorphicLayoutEffect(() => {
         if (firstRender.current) {
            firstRender.current = false;
            return;
         }

         if (mode === "wait") {
            timeoutID.current = setTimeout(updateCurrentComponent, duration);
         } else {
            updateCurrentComponent();
         }

         return () => {
            clearTimeout(timeoutID.current);
         };
      }, [pathName]);
   };
   useComponentUpdateEffect(pathName, mode, duration);

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
	unmountさせる。stateのcurrentに依存させる。
	===============================================*/
   const useUnmountPrevEffect = (
      state: IState,
      mode: TMode,
      duration: number
   ) => {
      const timeoutID = useRef<NodeJS.Timeout | number>(0);

      const unmountPrev = () => {
         if (mode === "sync") {
            dispatch({ type: "unmount-prev" });
         }
         // resetStyleCopies();
      };

      useIsomorphicLayoutEffect(() => {
         if (!state.prev) {
            return;
         }

         if (mode === "wait") {
            unmountPrev();
         } else {
            timeoutID.current = setTimeout(unmountPrev, duration);
         }

         return () => {
            clearTimeout(timeoutID.current);
         };
      }, [state.current]);
   };

   useUnmountPrevEffect(state, mode, duration);

   /*===============================================
	render
	===============================================*/
   return (
      <>
         {state.prev && state.prev}
         {state.current && state.current}
      </>
   );
};

export default memo(PageTransitionLayout);
