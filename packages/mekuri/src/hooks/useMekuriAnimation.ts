import { useEffect, useRef } from "react";
import { changeRegExp } from "../utils/changeRegExp";
import { useRouterState } from "../context/MekuriContext";
import { TMode } from "../layouts/MekuriLayout";

type TCallBackProp = {
   prev: string | null | undefined;
   current: string | null | undefined;
   next: string | null | undefined;
   yPosBeforeLeave: number;
   isPrev: (array: string[]) => string | false;
   isCurrent: (array: string[]) => string | false;
   isNext: (array: string[]) => string | false;
   getHashPos: () => number | false;
};

interface IProps {
   isReRender: boolean;
   mode: TMode;
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

const returnHashPos = () => {
   const hash = window.location.hash.substring(1);
   if (!hash) return false;
   const target = document.getElementById(hash);
   if (!target) return false;
   const scrollYPos = window.scrollY || document.documentElement.scrollTop;
   const pos = target.getBoundingClientRect().top + scrollYPos;
   return pos;
};

/**
 * usePageMekuriAnimation
 * @param props
 */
export const useMekuriAnimation = ({
   isReRender = true,
   mode,
   once,
   leave,
   enter,
   afterEnter,
}: IProps) => {
   const firstRender = useRef(true);
   const pathRef = useRef<string>(null!);
   const routerState = useRouterState();

   useEffect(() => {
      //Differentiate the calling of leave and enter by comparing the location.pathname at the time of render and the execution time of the state's subscribe function
      pathRef.current = location.pathname;

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   useEffect(() => {
      if (routerState.firstAccess) {
         /*===============================================
			prevent first access && render
			once event
			===============================================*/
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
         prev: routerState.prev,
         current: routerState.current,
         next: routerState.next,
         yPosBeforeLeave: routerState.yPosBeforeLeave!,
         isPrev: (pathArr) => {
            return returnMatchPath(pathArr, routerState.prev!);
         },
         isCurrent: (pathArr) => {
            return returnMatchPath(pathArr, routerState.current!);
         },
         isNext: (pathArr) => {
            return returnMatchPath(pathArr, routerState.next!);
         },
         getHashPos: () => returnHashPos(),
      };
      /*===============================================
		phases
		===============================================*/
      if (routerState!.phase === "leave") {
         /*===============================================
			leave
			===============================================*/
         if (mode === "wait") {
            //wait mode is also intended to be used with isReRender:false, do not prevent by pathName.
            leave && leave(callBackProp);
         }
         if (mode === "sync") {
            if (pathRef.current === location.pathname) {
               enter &&
                  enter({
                     ...callBackProp,
                     prev: routerState!.current,
                     current: routerState!.next,
                     isPrev: (pathArr) => {
                        return returnMatchPath(pathArr, routerState!.current!);
                     },
                     isCurrent: (pathArr) => {
                        return returnMatchPath(pathArr, routerState!.next!);
                     },
                  });
            } else {
               leave && leave(callBackProp);
            }
         }
      } else if (routerState!.phase === "enter") {
         /*===============================================
			enter
			===============================================*/
         if (
            mode === "sync" &&
            returnMatchPath([routerState.current!], location.pathname)
         ) {
            afterEnter && afterEnter(callBackProp);
         }
         //Prevent the enter animation from reoccurring at the timing after the page transition (after the leave animation has completed) and before the component is unmounted. However, if isReRender is false, let the enter animation reoccur due to dependencies on the state.
         if (pathRef.current !== location.pathname && isReRender) return;
         if (mode === "wait") {
            enter && enter(callBackProp);
         }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [routerState]);
};
