import { Dispatch, useState } from "react";
import { MekuriState, Mode } from "../../context/MekuriContext";
import { Action } from "../Mekuri";

type UseUpdateComponent = {
   mekuriState: MekuriState;
   mode: Mode;
   children: React.ReactNode;
   setComponentState: Dispatch<Action>;
};

export const useUpdateComponent = ({
   mekuriState,
   mode,
   children,
   setComponentState,
}: UseUpdateComponent) => {
   const [prevPhase, setPrevPhase] = useState(mekuriState.phase);
   if (prevPhase !== mekuriState.phase) {
      setPrevPhase(mekuriState.phase);
      if (mekuriState.phase === "enter" && mode === "wait") {
         setComponentState({
            type: "update-and-unmount",
            nextChildren: children,
         });
      }
      if (mekuriState.phase === "leave" && mode === "sync") {
         setComponentState({
            type: "update",
            nextChildren: children,
         });
      }
   }
};
