import { useRef, useEffect } from "react";
import { IState } from "./updateComponent";
import { TRestore } from "../../context/MekuriContext";

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
get scroll position by cache
===============================================*/
const getYPosFromCache = ({
   cache,
   key,
   isPopstate,
   pos,
}: IGetYPosFromCache) => {
   /********************
	default transition
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
      //back
      cache.keysArr = [key];
      return cache.backPosY || 0;
   }
   //forward
   cache.keysArr = [key];
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

   useEffect(() => {
      if (firstRender.current) {
         if (window.history.scrollRestoration === "auto") {
            window.history.scrollRestoration = "manual";
         }
         window.addEventListener("popstate", () => {
            isPopstate.current = true;
         });

         //push first key
         restoreCache.current.keysArr.push(state.restorePos.key);

         firstRender.current = false;
         return;
      }
      /*===============================================
		scroll restration
		===============================================*/
      if (scrollRestoration === "top") {
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [state.restorePos]);
};
