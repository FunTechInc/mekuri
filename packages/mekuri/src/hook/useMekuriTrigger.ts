import { useRef } from "react";
import { Phase, useMekuriState } from "../context/MekuriContext";

/**
 * @param phase `enter` | `leave` , Specify the phase to subscribe to trigger updates
 */
export const useMekuriTrigger = (phase: Phase) => {
   const { phase: phaseState, nextTrigger, currentTrigger } = useMekuriState();
   const triggerRef = useRef(currentTrigger);

   if (
      (phase === "enter" && phaseState === "enter") ||
      (phase === "leave" && phaseState === "leave")
   ) {
      triggerRef.current = nextTrigger;
   }

   return triggerRef.current;
};
