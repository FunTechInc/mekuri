import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { MekuriState, Trigger } from "./MekuriContext";

type UseUpdateMekuriStateProps = {
   trigger: Trigger;
   setMekuriState: Dispatch<SetStateAction<MekuriState>>;
   millisecond: number;
};

const CLASSNAME = "mekuri-transitioning";

export const useUpdateMekuriState = ({
   trigger,
   setMekuriState,
   millisecond,
}: UseUpdateMekuriStateProps) => {
   const triggerRef = useRef(trigger);
   const isPopstate = useRef(false);

   useEffect(() => {
      window.addEventListener("popstate", () => {
         if (document.documentElement.classList.contains(CLASSNAME)) {
            // If a popstate is executed during transition, execute forward
            window.history.forward();
         } else {
            isPopstate.current = true;
         }
      });
   }, []);

   useEffect(() => {
      let timeoutID: NodeJS.Timeout | number;

      if (triggerRef.current !== trigger) {
         triggerRef.current = trigger;

         setMekuriState((state) => ({
            ...state,
            nextTrigger: trigger,
            yPosBeforeLeave:
               window.scrollY || document.documentElement.scrollTop,
            phase: "leave",
            isPopstate: isPopstate.current,
         }));
         document.documentElement.classList.add(CLASSNAME);

         timeoutID = setTimeout(() => {
            document.documentElement.classList.remove(CLASSNAME);

            setMekuriState((state) => ({
               ...state,
               prevTrigger: state.currentTrigger,
               currentTrigger: trigger,
               nextTrigger: trigger,
               phase: "enter",
            }));

            isPopstate.current = false;
         }, millisecond);
      }

      return () => {
         clearTimeout(timeoutID);
      };
   }, [trigger, millisecond, setMekuriState]);
};
