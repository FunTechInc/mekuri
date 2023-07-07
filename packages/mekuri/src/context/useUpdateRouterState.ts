import { useEffect, useRef } from "react";
import { getIsMatchRouting } from "../utils/getIsMatchRouting";
import { TRouting, IRouterState } from "./MekuriContext";

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

   const prevRouter = useRef("");

   useEffect(() => {
      //Initialize state when first render and outside of routing.
      const isMatchRouting =
         getIsMatchRouting(routing, router) &&
         getIsMatchRouting(routing, prevRouter.current);
      prevRouter.current = router;
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
