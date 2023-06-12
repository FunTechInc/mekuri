import { useEffect, useRef } from "react";
import {
   TPageMekuriStateName,
   usePageMekuriStore,
} from "../_context/usePageMekuriStore";
import { TMode } from "../_component/PageMekuri/types";
import { changeRegExp } from "../_component/PageMekuri/utils/getComponent";

type TCallBackProp = {
   prev: string | null | undefined;
   current: string | null | undefined;
   next: string | null | undefined;
   yPosBeforeLeave: number;
   isPrev: (array: string[]) => string | false;
   isCurrent: (array: string[]) => string | false;
   isNext: (array: string[]) => string | false;
};

interface IProps {
   isReRender: boolean;
   mode: TMode;
   stateName: TPageMekuriStateName;
   once?: () => void;
   leave?: (state: TCallBackProp) => void;
   enter?: (state: TCallBackProp) => void;
   afterEnter?: (state: TCallBackProp) => void;
}

//Return a string that matches testPath after normalization.
const returnMatchPath = (
   pathArr: string[],
   testPath: string
): string | false => {
   if (!testPath) return false;
   const matchPath = pathArr
      .slice()
      .find((path) => changeRegExp(path, true).test(testPath!));
   return matchPath ?? false;
};

/**
 * usePageMekuriAnimation
 * @param props
 */
export const usePageMekuriAnimation = ({
   isReRender = true,
   mode,
   once,
   leave,
   enter,
   afterEnter,
   stateName,
}: IProps) => {
   const firstRender = useRef(true);
   useEffect(() => {
      //Differentiate the calling of leave and enter by comparing the location.pathname at the time of render and the execution time of the state's subscribe function
      let pathName = location.pathname;
      //In sync mode, call the afterEnter callback after enter. However, do not trigger it during the render time of the leave phase.
      let isLeavePhaseRender: boolean = false;
      const unsubscribe = usePageMekuriStore.subscribe(
         (state) => state[stateName],
         (state) => {
            /*===============================================
				prevent first access && render
				once event
				===============================================*/
            if (state.phase === null) {
               if (firstRender.current) {
                  once && once();
                  firstRender.current = false;
               }
               return;
            }
            /*===============================================
				pass to the leave and enter callback
				===============================================*/
            const callBackProp: TCallBackProp = {
               prev: state.prev,
               current: state.current,
               next: state.next,
               yPosBeforeLeave: state.yPosBeforeLeave!,
               isPrev: (pathArr) => {
                  return returnMatchPath(pathArr, state.prev!);
               },
               isCurrent: (pathArr) => {
                  return returnMatchPath(pathArr, state.current!);
               },
               isNext: (pathArr) => {
                  return returnMatchPath(pathArr, state.next!);
               },
            };
            /*===============================================
				phases
				===============================================*/
            if (state.phase === "leave") {
               /*===============================================
					leave
					===============================================*/
               if (mode === "wait") {
                  //wait mode is also intended to be used with isReRender:false, do not prevent by pathName.
                  leave && leave(callBackProp);
               }
               if (mode === "sync") {
                  if (pathName === location.pathname) {
                     enter &&
                        enter({
                           ...callBackProp,
                           prev: state.current,
                           current: state.next,
                           isPrev: (pathArr) => {
                              return returnMatchPath(pathArr, state.current!);
                           },
                           isCurrent: (pathArr) => {
                              return returnMatchPath(pathArr, state.next!);
                           },
                        });
                     isLeavePhaseRender = true;
                  } else {
                     leave && leave(callBackProp);
                  }
               }
            } else if (state.phase === "enter") {
               /*===============================================
					enter
					===============================================*/
               if (
                  mode === "sync" &&
                  pathName === location.pathname &&
                  !isLeavePhaseRender
               ) {
                  afterEnter && afterEnter(callBackProp);
               }
               //Prevent the enter animation from reoccurring at the timing after the page transition (after the leave animation has completed) and before the component is unmounted. However, if isReRender is false, let the enter animation reoccur due to dependencies on the state.
               if (pathName !== location.pathname && isReRender) return;
               if (mode === "wait") {
                  enter && enter(callBackProp);
               }
            }
         },
         {
            fireImmediately: true,
         }
      );
      return () => {
         unsubscribe();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
};
