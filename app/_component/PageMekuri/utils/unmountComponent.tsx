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
   const timeoutID = useRef<NodeJS.Timeout | number>(0);

   const unmountPrev = () => {
      if (mode === "sync") {
         dispatch({ type: "unmount-prev" });
      }
      // resetStyleCopies();
   };

   useIsomorphicLayoutEffect(() => {
      if (
         (!state.prev && mode === "wait") ||
         (!state.next && mode === "sync")
      ) {
         return;
      }

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
