import { useEffect, useRef } from "react";
import { changeRegExp } from "../utils/changeRegExp";

import { IRouterState } from "../type";

interface IUseUpdateRouterState {
   state: IRouterState;
   dispatch: (prop: IRouterState) => void;
   router: string;
   millisecond: number;
   preventArr: string[];
}

const checkPreventPath = (pathArr: string[], testPath: string): boolean => {
   if (!testPath) return false;
   if (pathArr.length === 0) return false;
   const matchPath = pathArr
      .slice()
      .find((path) => changeRegExp(path, true).test(testPath!));
   return matchPath ? true : false;
};

export const useUpdateRouterState = ({
   state,
   dispatch,
   millisecond,
   preventArr,
   router,
}: IUseUpdateRouterState) => {
   const firstRender = useRef(true);
   const timeoutID = useRef<NodeJS.Timeout | number>(0);

   useEffect(() => {
      if (firstRender.current || checkPreventPath(preventArr, router)) {
         firstRender.current = false;
         dispatch({
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
