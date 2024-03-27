import { useEffect, useRef } from "react";
import {
   Trigger,
   useConstantState,
   useMekuriState,
} from "../context/MekuriContext";
import { ReturnHashPosReturn, returnHashPos } from "./utils/returnHashPos";
import {
   intersectionObserver,
   HandleIntersectionObserver,
} from "./utils/intersectionObserver";
import { onStylesheetLoad } from "./utils/onStylesheetLoad";

export type MekuriCallBackProps = {
   prevTrigger: Trigger | null | undefined;
   currentTrigger: Trigger | null | undefined;
   nextTrigger: Trigger | null | undefined;
   /** Returns the Y position before leaving the page */
   yPosBeforeLeave: number;
   /** If # is attached to the URL when transitioning, the distance to that ID is returned. */
   getHashPos: ReturnHashPosReturn;
   /** intersectionObserver (
      targetRef: React.RefObject<HTMLElement>,
      callback: (isIntersecting: boolean) => void
   ) => void
 * */
   intersectionObserver: HandleIntersectionObserver;
   /** mekuri renders based on timeout. Therefore, there are cases where the next component is rendered before the chunked Stylesheet updated by Next.js is loaded. onStylesheetLoad ensures that functions are executed after the Stylesheet is loaded. onStylesheetLoad ensures that the function is executed after the Stylesheet is loaded */
   onStylesheetLoad: (callback: () => void) => void;
};

type UseMekuriAnimationProps = {
   onOnce?: (props: MekuriCallBackProps) => void;
   onLeave?: (props: MekuriCallBackProps) => void;
   onEnter?: (props: MekuriCallBackProps) => void;
   /** (props: CallBackProp) => void; onEnter in sync mode is called in leave phase. onAfterSyncEnter is called in the enter phase of sync mode. */
   onAfterSyncEnter?: (props: MekuriCallBackProps) => void;
   onEveryLeave?: (props: MekuriCallBackProps) => void;
   onEveryEnter?: (props: MekuriCallBackProps) => void;
};

/**
 * A hook that can be used within <MekuriContext>. Animations can be added to monitor the mounting and unmounting of elements from the tree.
 * The execution timing differs between wait mode and sync mode. Within the context, the execution timing will correspond to the set mode.
 *
 * ```jsx
 * const { second } = useMekuriDuration();
 * useMekuriAnimation({
 * 　　// callback here
 * });
 * ```
 *
 */
export const useMekuriAnimation = ({
   onOnce,
   onLeave,
   onEnter,
   onAfterSyncEnter,
   onEveryLeave,
   onEveryEnter,
}: UseMekuriAnimationProps) => {
   const isOnceCalled = useRef(false);
   const pathRef = useRef<string>();
   const mekuriState = useMekuriState();
   const { mode } = useConstantState();

   useEffect(() => {
      // Differentiate the calling of leave and enter by comparing the location.pathname at the time of render and the execution time of the state's subscribe function
      // use everyLeave/Enter for non-reRendering component
      pathRef.current = location.pathname;
   }, []);

   useEffect(() => {
      // Whether there is a change in pathname when hooking the change in mekuriState.phase
      const isCurrentPage = pathRef.current === location.pathname;

      const callBackProps: MekuriCallBackProps = {
         prevTrigger: mekuriState.prevTrigger,
         currentTrigger: mekuriState.currentTrigger,
         nextTrigger: mekuriState.nextTrigger,
         yPosBeforeLeave: mekuriState.yPosBeforeLeave,
         getHashPos: returnHashPos,
         intersectionObserver,
         onStylesheetLoad,
      };

      if (!isOnceCalled.current && mekuriState.phase === null) {
         onOnce && onOnce(callBackProps);
         isOnceCalled.current = true;
         return;
      }

      if (mekuriState.phase === "leave") {
         onEveryLeave && onEveryLeave(callBackProps);

         if (mode === "wait") {
            onLeave && onLeave(callBackProps);
         }

         if (mode === "sync") {
            if (isCurrentPage) {
               onEnter &&
                  onEnter({
                     ...callBackProps,
                     prevTrigger: mekuriState.currentTrigger,
                     currentTrigger: mekuriState.nextTrigger,
                  });
            } else {
               onLeave && onLeave(callBackProps);
            }
         }
      }

      if (mekuriState.phase === "enter") {
         onEveryEnter && onEveryEnter(callBackProps);

         if (mode === "wait" && isCurrentPage) {
            onEnter && onEnter(callBackProps);
         }

         if (mode === "sync") {
            onAfterSyncEnter && onAfterSyncEnter(callBackProps);
         }
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [mekuriState]);
};
