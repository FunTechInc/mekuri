import { useRef, useEffect, Dispatch } from "react";
import { IMekuriState, TMode } from "../../context/MekuriContext";
import { TAction, TActionType } from "../Mekuri";

interface IUseUpdateComponent {
   mekuriState: IMekuriState;
   mode: TMode;
   children: React.ReactNode;
   setComponentState: Dispatch<TAction>;
}

export const useUpdateComponent = ({
   mekuriState,
   mode,
   children,
   setComponentState,
}: IUseUpdateComponent) => {
   const isInitialRender = useRef(true);
   const updateCurrentChildren = (type: TActionType) => {
      setComponentState({
         type: type,
         nextChildren: children,
         restorePos: {
            key: mekuriState.currentTrigger || "",
            pos: mekuriState.yPosBeforeLeave,
         },
      });
   };
   useEffect(() => {
      if (isInitialRender.current) {
         isInitialRender.current = false;
         return;
      }
      // wait mode
      if (mekuriState.phase === "enter" && mode === "wait") {
         updateCurrentChildren("update-unmount");
      }
      // sync mode
      if (mekuriState.phase === "leave" && mode === "sync") {
         updateCurrentChildren("update");
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [mekuriState]);
};
