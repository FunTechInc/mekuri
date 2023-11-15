import { Dispatch, useEffect, useRef } from "react";
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
   const isInitialRender = useRef(true);

   useEffect(() => {
      if (isInitialRender.current) {
         isInitialRender.current = false;
         return;
      }

      if (mekuriState.phase === "enter" && mode === "sync") {
         setComponentState({
            type: "unmount-prev",
         });
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [mekuriState.phase]);
};
