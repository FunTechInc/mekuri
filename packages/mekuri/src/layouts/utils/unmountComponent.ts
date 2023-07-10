import { useEffect, useRef } from "react";
import { TMode } from "../../context/MekuriContext";
import { IAction, IState } from "./updateComponent";
import { TIsMatchRouting } from "../MekuriLayout";
/*===============================================
Unmount in response to changes in state.
===============================================*/
interface IUnmountPrevEffect {
   state: IState;
   mode: TMode;
   millisecond: number;
   dispatch: (prop: IAction) => void;
   isMatchRouting: TIsMatchRouting;
}

export const useUnmountPrevEffect = ({
   state,
   mode,
   millisecond,
   dispatch,
   isMatchRouting,
}: IUnmountPrevEffect) => {
   const firstRender = useRef(true);
   const timeoutID = useRef<NodeJS.Timeout | number>(0);

   /*===============================================
	unmount & cssReset
	===============================================*/
   const preventRef = useRef("");

   useEffect(() => {
      preventRef.current = location.pathname;
   }, []);

   const unmountPrev = () => {
      if (preventRef.current !== location.pathname) {
         dispatch({
            type: "unmount-prev",
         });
      } else {
         //error handling for rapid-fire errors
         dispatch({
            type: "rapid-fire",
         });
      }
      preventRef.current = location.pathname;
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
      //Prevent the second unmount after switching current to next.
      if (!state.next && mode === "sync") {
         return;
      }
      //outside of routing
      if (!isMatchRouting.match) {
         return;
      }
      /*===============================================
		unmount
		===============================================*/
      if (mode === "sync") {
         timeoutID.current = setTimeout(unmountPrev, millisecond);
      }

      return () => {
         clearTimeout(timeoutID.current);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [state.current, state.next]);
};
