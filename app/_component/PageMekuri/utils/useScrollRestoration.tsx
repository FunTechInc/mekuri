import { useRef } from "react";
import { TRestore, IState } from "../types";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

interface IUseScrollRestoration {
   state: IState;
   scrollRestoration: TRestore;
}
interface IRestoreCache {
   backPosY: number;
   keysArr: string[];
}
interface IGetYPosFromCache {
   cache: IRestoreCache;
   key: string;
   isPopstate: boolean;
   pos: number;
}

/*===============================================
cacheからscroll position を getする
===============================================*/
const getYPosFromCache = ({
   cache,
   key,
   isPopstate,
   pos,
}: IGetYPosFromCache) => {
   /********************
	ノーマル遷移
	********************/
   if (isPopstate === false) {
      cache.backPosY = pos;
      cache.keysArr.push(key);
      return 0;
   }
   /********************
	popstate
	********************/
   if (key === cache.keysArr[cache.keysArr.length - 2]) {
      //backで1回だけrestore
      cache.keysArr = [key];
      return cache.backPosY || 0;
   }
   //それ以外は0を返す
   return 0;
};

export const useScrollRestoration = ({
   scrollRestoration,
   state,
}: IUseScrollRestoration) => {
   const firstRender = useRef(true);
   const isPopstate = useRef(false);

   const restoreCache = useRef<IRestoreCache>({
      backPosY: 0,
      keysArr: [],
   });

   useIsomorphicLayoutEffect(() => {
      //初回レンダリング
      if (firstRender.current) {
         if (window.history.scrollRestoration === "auto") {
            window.history.scrollRestoration = "manual";
         }
         window.addEventListener("popstate", () => {
            isPopstate.current = true;
         });

         //最初のkeyをいれる
         restoreCache.current.keysArr.push(state.restorePos.key);

         firstRender.current = false;
         return;
      }
      /*===============================================
		scroll restration
		===============================================*/
      if (scrollRestoration === "top") {
         //topの時は常にTOPに
         window.scrollTo({ top: 0 });
      } else if (scrollRestoration === "restore") {
         const restorePosY = getYPosFromCache({
            cache: restoreCache.current,
            key: state.restorePos.key,
            isPopstate: isPopstate.current,
            pos: state.restorePos.pos,
         });
         window.scrollTo({ top: restorePosY });
         isPopstate.current = false;
      }
   }, [state.restorePos]);
};
