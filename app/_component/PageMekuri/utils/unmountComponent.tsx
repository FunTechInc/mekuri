import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { IState, TMode, IAction } from "../types";

/*===============================================
stateの変更に応じてアンマウントする
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
      // resetStyleCopies();
   };

   useIsomorphicLayoutEffect(() => {
      /*===============================================
		prevent
		===============================================*/
      //初回レンダリング
      if (firstRender.current) {
         firstRender.current = false;
         return;
      }
      if (!state.next && mode === "sync") {
         //currentをnextで切り替えた後の2度目のunmoutを防ぐ
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
