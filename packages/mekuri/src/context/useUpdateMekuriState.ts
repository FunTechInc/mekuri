import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { IMekuriState, TTrigger } from "./MekuriContext";

interface IUseUpdateMekuriState {
   trigger: TTrigger;
   setMekuriState: Dispatch<SetStateAction<IMekuriState>>;
   millisecond: number;
}

export const useUpdateMekuriState = ({
   trigger,
   setMekuriState,
   millisecond,
}: IUseUpdateMekuriState) => {
   const isInitialRender = useRef(true);
   const timeoutID = useRef<NodeJS.Timeout | number>(0);

   useEffect(() => {
      // initial render
      if (isInitialRender.current) {
         isInitialRender.current = false;
         setMekuriState((state) => ({
            ...state,
            initialRender: false,
         }));
         return;
      }
      // get yPosBeforeLeave
      const scrollYPos = window.scrollY || document.documentElement.scrollTop;
      // update state (leave)
      setMekuriState((state) => ({
         ...state,
         nextTrigger: trigger,
         phase: "leave",
         yPosBeforeLeave: scrollYPos,
      }));
      timeoutID.current = setTimeout(() => {
         // update state (enter)
         setMekuriState((state) => ({
            ...state,
            prevTrigger: state.currentTrigger,
            currentTrigger: trigger,
            nextTrigger: trigger,
            phase: "enter",
         }));
      }, millisecond);

      // ClearTimeout when transition is interrupted
      return () => {
         clearTimeout(timeoutID.current);
      };
   }, [trigger, millisecond, setMekuriState]);
};
