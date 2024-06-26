import { useRef, useEffect, useCallback } from "react";
import {
   MekuriState,
   Phase,
   ReatrationType,
   ScrollRestration,
   Trigger,
   CustomRestrationEvent,
} from "../context/MekuriContext";

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

   // Whether scrollRestoration is in custom mode
   const isCustomRestration =
      typeof scrollRestoration === "object" &&
      "scrollRestoration" in scrollRestoration;

   const restoreCache = useRef<RestoreCache>({
      backPosY: 0,
      keysArr: [],
   });

   // If CustomRestration only has onLeave, update cache only in onLeave phase
   const isFragOnLeave =
      isCustomRestration &&
      !scrollRestoration.onEnter &&
      scrollRestoration.onLeave;
   const cacheUpdateFrag = useRef<Phase>(isFragOnLeave ? "leave" : "enter");

   const getScrollPosY = useCallback(
      (phase: Phase) => {
         const isUpdate = cacheUpdateFrag.current === phase;
         const isUpdateOnLeave = isUpdate && isFragOnLeave;
         const restorePosY = getYPosFromCache({
            isCacheUpdate: isUpdate,
            offsetIndex: phase === "enter" || isUpdateOnLeave ? 2 : 1,
            cache: restoreCache.current,
            // If isFragOnLeave and isUpdate, pass nextTrigger to key
            key:
               (isUpdateOnLeave
                  ? mekuriState.nextTrigger
                  : mekuriState.currentTrigger) || "",
            pos: mekuriState.yPosBeforeLeave,
            isPopstate: mekuriState.isPopstate,
         });

         return restorePosY;
      },
      [cacheUpdateFrag, isFragOnLeave, mekuriState]
   );

   const sortCallbackEvent = useCallback(
      (type: ReatrationType, phase: Phase, event: CustomRestrationEvent) => {
         if (type === "top") {
            event(0, mekuriState.isPopstate);
         } else if (type === "restore") {
            event(getScrollPosY(phase), mekuriState.isPopstate);
         }
      },
      [getScrollPosY, mekuriState.isPopstate]
   );

   useEffect(() => {
      if (scrollRestoration === "none") {
         return;
      }

      if (isInitialRender.current) {
         if (window.history.scrollRestoration === "auto") {
            window.history.scrollRestoration = "manual";
         }

         // push first key
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
