import { useEffect, useRef } from "react";
import { TRouting, IRouterState } from "./MekuriContext";
import { useIsMatchRouting } from "../utils/useIsMatchRouting";

interface IUseUpdateRouterState {
   state: IRouterState;
   dispatch: (prop: IRouterState) => void;
   router: string;
   millisecond: number;
   routing: TRouting[];
}

export const useUpdateRouterState = ({
   state,
   dispatch,
   millisecond,
   routing,
   router,
}: IUseUpdateRouterState) => {
   const firstRender = useRef(true);
   const timeoutID = useRef<NodeJS.Timeout | number>(0);

   const isMatchRouting = useIsMatchRouting({ router, routing });

   useEffect(() => {
      if (firstRender.current || !isMatchRouting) {
         firstRender.current = false;
         dispatch({
            firstAccess: false,
            prev: null,
            current: router,
            phase: null,
            next: null,
         });
         return;
      }
      //get yPosBeforeLeave
      const scrollYPos = document.documentElement.scrollTop;
      //update state (leave)
      dispatch({
         next: router,
         phase: "leave",
         yPosBeforeLeave: scrollYPos,
      });
      timeoutID.current = setTimeout(() => {
         //update state (enter)
         dispatch({
            prev: state.current,
            current: router,
            next: router,
            phase: "enter",
         });
      }, millisecond);
      return () => {
         clearTimeout(timeoutID.current);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [router]);
};
