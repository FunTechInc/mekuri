import { useEffect, useRef } from "react";
import {
   TTrigger,
   useConstantState,
   useMekuriState,
} from "../context/MekuriContext";

type TCallBackProp = {
   prevTrigger: TTrigger | null | undefined;
   currentTrigger: TTrigger | null | undefined;
   nextTrigger: TTrigger | null | undefined;
   yPosBeforeLeave: number;
   getHashPos: () => number | false;
   intersectionObserver: (
      targetRef: React.RefObject<HTMLElement>,
      callback: (isIntersecting: boolean) => void
   ) => void;
};

interface IProps {
   onOnce?: () => void;
   onLeave?: (state: TCallBackProp) => void;
   onEnter?: (state: TCallBackProp) => void;
   onEveryLeave?: (state: TCallBackProp) => void;
   onEveryEnter?: (state: TCallBackProp) => void;
}

const returnHashPos = () => {
   const hash = window.location.hash.substring(1);
   if (!hash) {
      return false;
   }
   const target = document.getElementById(hash);
   if (!target) {
      return false;
   }
   const scrollYPos = window.scrollY || document.documentElement.scrollTop;
   const pos = target.getBoundingClientRect().top + scrollYPos;
   return pos;
};

/**
 * A hook that can be used within <MekuriContext>. Animations can be added to monitor the mounting and unmounting of elements from the tree.
 * The execution timing differs between wait mode and sync mode. Within the context, the execution timing will correspond to the set mode.
 *
 * @param onOnce () => void; Called only once on first access and first rendering.
 * @param onLeave (state: TCallBackProp) => void;
 * @param onEnter (state: TCallBackProp) => void;
 * @param onEveryLeave (state: TCallBackProp) => void;
 * @param onEveryEnter (state: TCallBackProp) => void;
 *
 * `CallBackProp`
 *
 *  prevTrigger,currentTrigger,nextTrigger => returns the respective trigger
 *
 *  yPosBeforeLeave => Returns the Y position before leaving the page
 *
 *  getHashPos => If # is attached to the URL when transitioning, the distance to that ID is returned.
 *
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
   onEveryLeave,
   onEveryEnter,
}: IProps) => {
   const isInitialRender = useRef(true);
   const pathRef = useRef<string>(null!);
   const mekuriState = useMekuriState();
   const { mode } = useConstantState();

   useEffect(() => {
      // Differentiate the calling of leave and enter by comparing the location.pathname at the time of render and the execution time of the state's subscribe function
      // use everyLeave/Enter for non-reRendering component
      pathRef.current = location.pathname;
   }, []);

   useEffect(() => {
      if (mekuriState.initialRender) {
         //prevent first access & call once event
         if (isInitialRender.current) {
            onOnce && onOnce();
            isInitialRender.current = false;
         }
         return;
      }

      // pass to the leave and enter callback
      const callBackProp: TCallBackProp = {
         prevTrigger: mekuriState.prevTrigger,
         currentTrigger: mekuriState.currentTrigger,
         nextTrigger: mekuriState.nextTrigger,
         yPosBeforeLeave: mekuriState.yPosBeforeLeave,
         getHashPos: () => returnHashPos(),
         intersectionObserver: (targetRef, callback) => {
            const target = targetRef?.current;
            if (!target) {
               return;
            }
            const observer = new IntersectionObserver(
               (
                  entries: IntersectionObserverEntry[],
                  observer: IntersectionObserver
               ) => {
                  entries.forEach((entry) => {
                     if (entry.isIntersecting) {
                        callback(true);
                        observer.unobserve(entry.target);
                     } else if (!entry.isIntersecting) {
                        callback(false);
                        observer.unobserve(entry.target);
                     }
                  });
               },
               { rootMargin: "0px", threshold: 0 }
            );
            observer.observe(target);
         },
      };

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
            if (pathRef.current === location.pathname) {
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
         if (pathRef.current === location.pathname && mode === "wait") {
            onEnter && onEnter(callBackProp);
         }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [mekuriState]);
};
