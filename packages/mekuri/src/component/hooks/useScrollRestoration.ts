import { useRef, useEffect, useCallback } from "react";
import {
   MekuriState,
   Phase,
   ReatrationType,
   ScrollRestration,
   Trigger,
} from "../../context/MekuriContext";

type UseScrollRestoration = {
   scrollRestoration: ScrollRestration;
   mekuriState: MekuriState;
};
type RestoreCache = {
   backPosY: number;
   keysArr: Trigger[];
};
type GetYPosFromCache = {
   isCacheUpdate: boolean;
   offsetIndex: 1 | 2;
   cache: RestoreCache;
   key: Trigger;
   isPopstate: boolean;
   pos: number;
};

const getYPosFromCache = ({
   isCacheUpdate,
   offsetIndex,
   cache,
   key,
   isPopstate,
   pos,
}: GetYPosFromCache) => {
   if (isPopstate === false) {
      if (isCacheUpdate) {
         cache.backPosY = pos;
         cache.keysArr.push(key);
      }
      return 0;
   }
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
}: UseScrollRestoration) => {
   const isInitialRender = useRef(true);
   const isPopstate = useRef(false);
   // Whether scrollRestoration is in custom mode
   const isCustomRestration =
      typeof scrollRestoration === "object" &&
      "scrollRestoration" in scrollRestoration;

   const restoreCache = useRef<RestoreCache>({
      backPosY: 0,
      keysArr: [],
   });

   const isFragOnLeave =
      isCustomRestration &&
      !scrollRestoration.onEnter &&
      scrollRestoration.onLeave;
   const cacheUpdateFrag = useRef<Phase>(isFragOnLeave ? "leave" : "enter");

   const getScrollPosY = useCallback(
      (phase: Phase) => {
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

   const sortCallbackEvent = useCallback(
      (type: ReatrationType, phase: Phase, event: (pos: number) => void) => {
         if (type === "top") {
            event(0);
         } else if (type === "restore") {
            event(getScrollPosY(phase));
         }
      },
      [getScrollPosY]
   );

   useEffect(() => {
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
         restoreCache.current.keysArr.push(mekuriState.currentTrigger || "");
         isInitialRender.current = false;

         return;
      }

      if (
         mekuriState.phase === "leave" &&
         isCustomRestration &&
         scrollRestoration?.onLeave
      ) {
         sortCallbackEvent(
            scrollRestoration.scrollRestoration,
            mekuriState.phase,
            scrollRestoration.onLeave
         );
      }

      if (mekuriState.phase === "enter") {
         switch (scrollRestoration) {
            case "top":
               window.scrollTo({ top: 0 });
               break;
            case "restore":
               window.scrollTo({ top: getScrollPosY(mekuriState.phase) });
               break;
            default:
               if (isCustomRestration && scrollRestoration?.onEnter) {
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
