import { useRef, useEffect, useCallback } from "react";
import {
   IMekuriState,
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
   mekuriState,
   scrollRestoration,
}: IUseScrollRestoration) => {
   const isInitialRender = useRef(true);
   const isPopstate = useRef(false);

   const restoreCache = useRef<IRestoreCache>({
      backPosY: 0,
      keysArr: [],
   });

   const getScrollPosY = useCallback(() => {
      const restorePosY = getYPosFromCache({
         cache: restoreCache.current,
         key: mekuriState.currentTrigger || "",
         pos: mekuriState.yPosBeforeLeave,
         isPopstate: isPopstate.current,
      });
      isPopstate.current = false;
      return restorePosY;
   }, [mekuriState.currentTrigger, mekuriState.yPosBeforeLeave]);

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

      const isObject =
         typeof scrollRestoration === "object" &&
         "scrollRestoration" in scrollRestoration;
      const cunstomScrollRestore = (
         type: TReatrationType,
         event: (pos: number) => void
      ) => {
         if (type === "top") {
            event(0);
         } else if (type === "restore") {
            event(getScrollPosY());
         }
      };

      //leave phase
      if (
         mekuriState.phase === "leave" &&
         isObject &&
         scrollRestoration?.onLeave
      ) {
         cunstomScrollRestore(
            scrollRestoration.scrollRestoration,
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
               window.scrollTo({ top: getScrollPosY() });
               break;
            default:
               if (isObject && scrollRestoration?.onEnter) {
                  cunstomScrollRestore(
                     scrollRestoration.scrollRestoration,
                     scrollRestoration.onEnter
                  );
               }
               break;
         }
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [mekuriState.phase]);
};
