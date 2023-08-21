import { useRef, useEffect, useCallback } from "react";
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
   const yPos =
      key === cache.keysArr[cache.keysArr.length - 2] ? cache.backPosY || 0 : 0;
   cache.keysArr = [key];
   return yPos;
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

   const getScrollPosY = () => {
      const restorePosY = getYPosFromCache({
         cache: restoreCache.current,
         key: componentState.restorePos.key,
         isPopstate: isPopstate.current,
         pos: componentState.restorePos.pos,
      });
      isPopstate.current = false;
      return restorePosY;
   };

   useEffect(() => {
      // if scrollRestration is "none" do nothing
      if (scrollRestoration === "none") {
         return;
      }

      //initial render
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

      switch (scrollRestoration) {
         case "top":
            window.scrollTo({ top: 0 });
            break;
         case "restore":
            window.scrollTo({ top: getScrollPosY() });
            break;
         default:
            if (
               typeof scrollRestoration === "object" &&
               "scrollRestoration" in scrollRestoration
            ) {
               if (scrollRestoration.scrollRestoration === "top") {
                  scrollRestoration.onRestore(0);
               } else if (scrollRestoration.scrollRestoration === "restore") {
                  scrollRestoration.onRestore(getScrollPosY());
               }
            }
            break;
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [componentState.restorePos]);
};
