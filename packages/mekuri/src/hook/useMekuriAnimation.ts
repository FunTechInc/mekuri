import { useEffect, useRef } from "react";
import {
   TTrigger,
   useConstantState,
   useMekuriState,
} from "../context/MekuriContext";
import { TReturnHashPos, returnHashPos } from "./utils/returnHashPos";
import {
   TIntersectionObserverHandler,
   intersectionObserverHandler,
} from "./utils/intersectionObserverHandler";

type TCallBackProp = {
   prevTrigger: TTrigger | null | undefined;
   currentTrigger: TTrigger | null | undefined;
   nextTrigger: TTrigger | null | undefined;
   yPosBeforeLeave: number;
   getHashPos: TReturnHashPos;
   intersectionObserver: TIntersectionObserverHandler;
};

interface IProps {
   onOnce?: (props: TCallBackProp, isInitialRender: boolean) => void;
   onLeave?: (props: TCallBackProp) => void;
   onEnter?: (props: TCallBackProp) => void;
   onAfterSyncEnter?: (props: TCallBackProp) => void;
   onEveryLeave?: (props: TCallBackProp) => void;
   onEveryEnter?: (props: TCallBackProp) => void;
}

/**
 * A hook that can be used within <MekuriContext>. Animations can be added to monitor the mounting and unmounting of elements from the tree.
 * The execution timing differs between wait mode and sync mode. Within the context, the execution timing will correspond to the set mode.
 *
 * @param onOnce (props: TCallBackProp, isInitialRender:booleean) => void; It is called only once on the page that is accessed for the first time. The second argument is passed to determine whether this is the first rendering of the context. For example, for an element wrapped with Suspense, Once is executed, but the second argument returns false.
 * @param onLeave (props: TCallBackProp) => void;
 * @param onEnter (props: TCallBackProp) => void;
 * @param onAfterSyncEnter (props: TCallBackProp) => void; onEnter in sync mode is called in leave phase. onAfterSyncEnter is called in the enter phase of sync mode.
 * @param onEveryLeave (props: TCallBackProp) => void;
 * @param onEveryEnter (props: TCallBackProp) => void;
 *
 * `CallBackProp`
 *
 *  prevTrigger,currentTrigger,nextTrigger => returns the respective trigger
 *
 *  yPosBeforeLeave => Returns the Y position before leaving the page
 *
 *  getHashPos => If # is attached to the URL when transitioning, the distance to that ID is returned.
 * 
 * intersectionObserver (
      targetRef: React.RefObject<HTMLElement>,
      callback: (isIntersecting: boolean) => void
   ) => void
 *
 * ```jsx
 * const { second } = useMekuriDuration();
 * useMekuriAnimation({
 * 　　onEveryLeave: () => {
 * 　　　　gsap.to(ref.current, {
 * 　　　　　　opacity: 0,
 * 　　　　　　duration: second,
 * 　　　　　　ease: "power3.out",
 * 　　　　});
 * 　　},
 * });
 * ```
 *
 * @public
 */
export const useMekuriAnimation = ({
   onOnce,
   onLeave,
   onEnter,
   onAfterSyncEnter,
   onEveryLeave,
   onEveryEnter,
}: IProps) => {
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
      // pass to the leave and enter callback
      const callBackProp: TCallBackProp = {
         prevTrigger: mekuriState.prevTrigger,
         currentTrigger: mekuriState.currentTrigger,
         nextTrigger: mekuriState.nextTrigger,
         yPosBeforeLeave: mekuriState.yPosBeforeLeave,
         getHashPos: returnHashPos,
         intersectionObserver: intersectionObserverHandler,
      };

      // initial phase
      if (mekuriState.phase === null) {
         onOnce && onOnce(callBackProp, mekuriState.initialRender);
         return;
      }

      // leave phase
      if (mekuriState.phase === "leave") {
         // everyLeave
         onEveryLeave && onEveryLeave(callBackProp);
         // wait mode
         if (mode === "wait") {
            onLeave && onLeave(callBackProp);
         }
         // sync mode
         if (mode === "sync") {
            if (isCurrentPage) {
               onEnter &&
                  onEnter({
                     ...callBackProp,
                     prevTrigger: mekuriState.currentTrigger,
                     currentTrigger: mekuriState.nextTrigger,
                  });
            } else {
               onLeave && onLeave(callBackProp);
            }
         }
      }

      // enter phase
      if (mekuriState.phase === "enter") {
         //everyEnter
         onEveryEnter && onEveryEnter(callBackProp);
         // wait mode
         if (mode === "wait" && isCurrentPage) {
            onEnter && onEnter(callBackProp);
         }
         // sync mode
         if (mode === "sync") {
            onAfterSyncEnter && onAfterSyncEnter(callBackProp);
         }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [mekuriState]);
};
