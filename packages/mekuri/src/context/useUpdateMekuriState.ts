import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { MekuriState, Trigger } from "./MekuriContext";

type UseUpdateMekuriStateProps = {
   trigger: Trigger;
   setMekuriState: Dispatch<SetStateAction<MekuriState>>;
   millisecond: number;
};

export const useUpdateMekuriState = ({
   trigger,
   setMekuriState,
   millisecond,
}: UseUpdateMekuriStateProps) => {
   const triggerRef = useRef(trigger);
   const timeoutID = useRef<NodeJS.Timeout | number>(0);

   useEffect(() => {
      if (triggerRef.current !== trigger) {
         triggerRef.current = trigger;

         setMekuriState((state) => ({
            ...state,
            nextTrigger: trigger,
            phase: "leave",
            yPosBeforeLeave:
               window.scrollY || document.documentElement.scrollTop,
         }));

         timeoutID.current = setTimeout(() => {
            setMekuriState((state) => ({
               ...state,
               prevTrigger: state.currentTrigger,
               currentTrigger: trigger,
               nextTrigger: trigger,
               phase: "enter",
            }));
         }, millisecond);
      }

      return () => {
         clearTimeout(timeoutID.current);
      };
   }, [trigger, millisecond, setMekuriState]);
};
