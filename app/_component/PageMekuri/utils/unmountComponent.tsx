import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { IState, TMode, IAction } from "../types";

/*===============================================
Unmount in response to changes in state.
===============================================*/
interface IUnmountPrevEffect {
   state: IState;
   mode: TMode;
   duration: number;
   dispatch: (prop: IAction) => void;
}
export const useUnmountPrevEffect = ({
   state,
   mode,
   duration,
   dispatch,
}: IUnmountPrevEffect) => {
   const firstRender = useRef(true);
   const timeoutID = useRef<NodeJS.Timeout | number>(0);

   /*===============================================
	unmount & cssReset
	===============================================*/
   const unmountPrev = () => {
      if (mode === "sync") {
         dispatch({
            type: "unmount-prev",
         });
      }
   };

   useIsomorphicLayoutEffect(() => {
      /*===============================================
		prevent
		===============================================*/
      //first render
      if (firstRender.current) {
         firstRender.current = false;
         return;
      }
      if (!state.next && mode === "sync") {
         //Prevent the second unmount after switching current to next.
         return;
      }

      /*===============================================
		unmount
		===============================================*/
      if (mode === "wait") {
         unmountPrev();
      } else {
         timeoutID.current = setTimeout(unmountPrev, duration);
      }

      return () => {
         clearTimeout(timeoutID.current);
      };
   }, [state.current, state.next]);
};
