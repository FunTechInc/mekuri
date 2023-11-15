import { useRef, useEffect, Dispatch } from "react";
import { MekuriState, Mode } from "../../context/MekuriContext";
import { Action, ActionType } from "../Mekuri";

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
   const isInitialRender = useRef(true);
   const updateCurrentChildren = (type: ActionType) => {
      setComponentState({
         type: type,
         nextChildren: children,
      });
   };

   useEffect(() => {
      if (isInitialRender.current) {
         isInitialRender.current = false;
         return;
      }

      if (mekuriState.phase === "enter" && mode === "wait") {
         updateCurrentChildren("update-and-unmount");
      }

      if (mekuriState.phase === "leave" && mode === "sync") {
         updateCurrentChildren("update");
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [mekuriState.phase]);
};
