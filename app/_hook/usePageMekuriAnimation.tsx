import { useEffect } from "react";
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
   leave: (state: TCallBackProp) => void;
   enter: (state: TCallBackProp) => void;
   stateName: TPageMekuriStateName;
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
   leave,
   enter,
   stateName,
}: IProps) => {
   useEffect(() => {
      //render時点とstateのsubscribe関数の発火時点でのlocation.pathnameを比較してleaveとenterを呼び出し分ける
      let pathName = location.pathname;
      const unsubscribe = usePageMekuriStore.subscribe(
         (state) => state[stateName],
         (state) => {
            /********************
				初回renderはreturn
				********************/
            if (state.next === null) return;
            /*===============================================
				leaveとenterコールバックに返すオブジェクト
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
				phase
				===============================================*/
            if (state.phase === "leave") {
               /*===============================================
					leave フェーズ
					===============================================*/
               if (mode === "wait") {
                  leave(callBackProp);
               }
               if (mode === "sync") {
                  if (pathName === location.pathname) {
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
                  } else {
                     leave(callBackProp);
                  }
               }
            } else if (state.phase === "enter") {
               /*===============================================
					enter フェーズ
					===============================================*/
               //Prevent the enter animation from reoccurring at the timing after the page transition (after the leave animation has completed) and before the component is unmounted. However, if isReRender is false, let the enter animation reoccur due to dependencies on the state.
               if (pathName !== location.pathname && isReRender) return;
               if (mode === "wait") {
                  enter(callBackProp);
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
