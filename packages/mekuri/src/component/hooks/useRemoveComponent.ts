import { Dispatch, useState } from "react";
import { MekuriState, Mode } from "../../context/MekuriContext";
import { Action } from "../Mekuri";

type UseRemoveComponent = {
   mekuriState: MekuriState;
   mode: Mode;
   setComponentState: Dispatch<Action>;
};

export const useRemoveComponent = ({
   mekuriState,
   mode,
   setComponentState,
}: UseRemoveComponent) => {
   const [prevPhase, setPrevPhase] = useState(mekuriState.phase);
   if (
      mekuriState.phase !== prevPhase &&
      mekuriState.phase === "enter" &&
      mode === "sync"
   ) {
      setPrevPhase(mekuriState.phase);
      setComponentState({
         type: "unmount-prev",
      });
   }
};
