import { Dispatch, useEffect, useRef } from "react";
import { IMekuriState, TMode } from "../../context/MekuriContext";
import { TAction } from "../Mekuri";

interface IUseRemoveComponent {
   mekuriState: IMekuriState;
   mode: TMode;
   setComponentState: Dispatch<TAction>;
}

export const useRemoveComponent = ({
   mekuriState,
   mode,
   setComponentState,
}: IUseRemoveComponent) => {
   const isInitialRender = useRef(true);

   useEffect(() => {
      if (isInitialRender.current) {
         isInitialRender.current = false;
         return;
      }

      // sync mode
      if (mekuriState.phase === "enter" && mode === "sync") {
         setComponentState({
            type: "unmount-prev",
         });
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [mekuriState]);
};
