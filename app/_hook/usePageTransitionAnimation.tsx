import { useEffect } from "react";
import { TPageMekuriStateName, useAppStore } from "../_context/use-app-store";

interface IProps {
   isReRender: boolean;
   leave: () => void;
   enter: () => void;
   stateName: TPageMekuriStateName;
}

/**
 * usePageTransitionAnimation
 * @param props
 */

export const usePageTransitionAnimation = ({
   isReRender = true,
   leave,
   enter,
   stateName,
}: IProps) => {
   useEffect(() => {
      let pathName = location.pathname;
      const unsubscribe = useAppStore.subscribe(
         (state) => state[stateName],
         (state) => {
            if (state.path === null) return;
            if (state.phase === "leave") {
               leave();
            } else if (state.phase === "enter") {
               if (pathName !== location.pathname && isReRender) return;
               enter();
            }
         },
         {
            fireImmediately: true,
         }
      );
      return () => {
         unsubscribe();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
};
