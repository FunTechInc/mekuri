import { useRef, useEffect } from "react";
import { TRestore, TTrigger } from "../../context/MekuriContext";
import { TComponentState } from "../Mekuri";

interface IUseScrollRestoration {
   scrollRestoration: TRestore;
   componentState: TComponentState;
}
interface IRestoreCache {
   backPosY: number;
   keysArr: TTrigger[];
}
interface IGetYPosFromCache {
   cache: IRestoreCache;
   key: TTrigger;
   isPopstate: boolean;
   pos: number;
}

const getYPosFromCache = ({
   cache,
   key,
   isPopstate,
   pos,
}: IGetYPosFromCache) => {
   // default transition
   if (isPopstate === false) {
      cache.backPosY = pos;
      cache.keysArr.push(key);
      return 0;
   }
   // popstate
   if (key === cache.keysArr[cache.keysArr.length - 2]) {
      //back
      cache.keysArr = [key];
      return cache.backPosY || 0;
   }
   // forward
   cache.keysArr = [key];
   return 0;
};

export const useScrollRestoration = ({
   scrollRestoration,
   componentState,
}: IUseScrollRestoration) => {
   const isInitialRender = useRef(true);
   const isPopstate = useRef(false);

   const restoreCache = useRef<IRestoreCache>({
      backPosY: 0,
      keysArr: [],
   });

   useEffect(() => {
      // if scrollRestration is "none" do nothing
      if (scrollRestoration === "none") {
         return;
      }

      if (isInitialRender.current) {
         if (window.history.scrollRestoration === "auto") {
            window.history.scrollRestoration = "manual";
         }
         window.addEventListener("popstate", () => {
            isPopstate.current = true;
         });

         //push first key
         restoreCache.current.keysArr.push(componentState.restorePos.key);

         isInitialRender.current = false;
         return;
      }

      // top
      if (scrollRestoration === "top") {
         window.scrollTo({ top: 0 });
      }

      // restore
      if (scrollRestoration === "restore") {
         const restorePosY = getYPosFromCache({
            cache: restoreCache.current,
            key: componentState.restorePos.key,
            isPopstate: isPopstate.current,
            pos: componentState.restorePos.pos,
         });
         window.scrollTo({ top: restorePosY });
         isPopstate.current = false;
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [componentState.restorePos]);
};
