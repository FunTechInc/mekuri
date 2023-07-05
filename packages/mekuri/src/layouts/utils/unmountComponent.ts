import { useEffect, useRef } from "react";
import { IState } from "./updateComponent";
import { TMode } from "../MekuriLayout";
import { IAction } from "./updateComponent";

/*===============================================
Unmount in response to changes in state.
===============================================*/
interface IUnmountPrevEffect {
   state: IState;
   mode: TMode;
   millisecond: number;
   dispatch: (prop: IAction) => void;
}

export const useUnmountPrevEffect = ({
   state,
   mode,
   millisecond,
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

   useEffect(() => {
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
         timeoutID.current = setTimeout(unmountPrev, millisecond);
      }

      return () => {
         clearTimeout(timeoutID.current);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [state.current, state.next]);
};
