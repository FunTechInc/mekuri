import { useRef, useEffect, useCallback } from "react";
import {
   IMekuriState,
   TPhase,
   TReatrationType,
   TRestore,
   TTrigger,
} from "../../context/MekuriContext";

interface IUseScrollRestoration {
   scrollRestoration: TRestore;
   mekuriState: IMekuriState;
}
interface IRestoreCache {
   backPosY: number;
   keysArr: TTrigger[];
}
interface IGetYPosFromCache {
   isCacheUpdate: boolean;
   offsetIndex: 1 | 2;
   cache: IRestoreCache;
   key: TTrigger;
   isPopstate: boolean;
   pos: number;
}

//control position cache
const getYPosFromCache = ({
   isCacheUpdate,
   offsetIndex,
   cache,
   key,
   isPopstate,
   pos,
}: IGetYPosFromCache) => {
   // not popstate
   if (isPopstate === false) {
      if (isCacheUpdate) {
         cache.backPosY = pos;
         cache.keysArr.push(key);
      }
      return 0;
   }
   // popstate
   const yPos =
      key === cache.keysArr[cache.keysArr.length - offsetIndex]
         ? cache.backPosY || 0
         : 0;
   if (isCacheUpdate) {
      cache.keysArr = [key];
   }
   return yPos;
};

export const useScrollRestoration = ({
   mekuriState,
   scrollRestoration,
}: IUseScrollRestoration) => {
   const isInitialRender = useRef(true);
   const isPopstate = useRef(false);
   const isObject =
      typeof scrollRestoration === "object" &&
      "scrollRestoration" in scrollRestoration;
   const restoreCache = useRef<IRestoreCache>({
      backPosY: 0,
      keysArr: [],
   });
   // flag for when to update cache
   const isFragOnLeave =
      isObject && !scrollRestoration.onEnter && scrollRestoration.onLeave;
   const cacheUpdateFrag = useRef<TPhase>(isFragOnLeave ? "leave" : "enter");

   const getScrollPosY = useCallback(
      (phase: TPhase) => {
         const isUpdate = cacheUpdateFrag.current === phase;
         const restorePosY = getYPosFromCache({
            isCacheUpdate: isUpdate,
            offsetIndex: phase === "enter" ? 2 : 1,
            cache: restoreCache.current,
            key: mekuriState.currentTrigger || "",
            pos: mekuriState.yPosBeforeLeave,
            isPopstate: isPopstate.current,
         });
         if (isUpdate) {
            isPopstate.current = false;
         }
         return restorePosY;
      },
      [mekuriState.currentTrigger, mekuriState.yPosBeforeLeave, cacheUpdateFrag]
   );

   // sort callback events , top or restore
   const sortCallbackEvent = useCallback(
      (type: TReatrationType, phase: TPhase, event: (pos: number) => void) => {
         if (type === "top") {
            event(0);
         } else if (type === "restore") {
            event(getScrollPosY(phase));
         }
      },
      [getScrollPosY]
   );

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
         restoreCache.current.keysArr.push(mekuriState.currentTrigger || "");
         isInitialRender.current = false;
         return;
      }

      //leave phase
      if (
         mekuriState.phase === "leave" &&
         isObject &&
         scrollRestoration?.onLeave
      ) {
         sortCallbackEvent(
            scrollRestoration.scrollRestoration,
            mekuriState.phase,
            scrollRestoration.onLeave
         );
      }

      //enter phase
      if (mekuriState.phase === "enter") {
         switch (scrollRestoration) {
            case "top":
               window.scrollTo({ top: 0 });
               break;
            case "restore":
               window.scrollTo({ top: getScrollPosY(mekuriState.phase) });
               break;
            default:
               if (isObject && scrollRestoration?.onEnter) {
                  sortCallbackEvent(
                     scrollRestoration.scrollRestoration,
                     mekuriState.phase,
                     scrollRestoration.onEnter
                  );
               }
               break;
         }
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [mekuriState.phase]);
};
