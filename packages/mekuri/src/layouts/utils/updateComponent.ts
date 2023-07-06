import { useRef, useEffect } from "react";
import { getCurrentComponent, isCurrentComponentForPath } from "./getComponent";
import { TMode, TPagesItem } from "../MekuriLayout";

/*===============================================
type
===============================================*/
type TRestorePos = {
   key: string;
   pos: number;
};
export interface IState {
   current: React.ReactNode | null;
   next: React.ReactNode | null;
   restorePos: TRestorePos;
}
export interface IAction {
   type: "update" | "update-unmount" | "unmount-prev" | "rapid-fire";
   component?: React.ReactNode;
   restorePos?: TRestorePos;
}

/*===============================================
update component reducer
===============================================*/
export const componentReducer = (state: IState, action: IAction) => {
   switch (action.type) {
      /********************
		sync
		********************/
      case "update":
         return {
            ...state,
            next: action.component || null,
            restorePos: action.restorePos!,
         };
      case "unmount-prev":
         return {
            ...state,
            current: state.next || null,
            next: null,
         };
      //error handling for rapid-fire errors
      case "rapid-fire":
         return {
            ...state,
            current: state.current || null,
            next: null,
         };
      /********************
		wait
		********************/
      case "update-unmount":
         return {
            ...state,
            current: action.component || null,
            restorePos: action.restorePos!,
         };
      default:
         throw new Error();
   }
};

/*===============================================
Update the component according to the switch of the path.
===============================================*/
interface IComponentUpdateEffect {
   router: string;
   mode: TMode;
   millisecond: number;
   state: IState;
   pages: TPagesItem[];
   children: React.ReactNode;
   dispatch: (prop: IAction) => void;
}
export const useComponentUpdateEffect = ({
   router,
   mode,
   millisecond,
   state,
   pages,
   children,
   dispatch,
}: IComponentUpdateEffect) => {
   const firstRender = useRef(true);
   const timeoutID = useRef<NodeJS.Timeout | number>(0);

   const updateCurrentComponent = () => {
      const currentComponent = getCurrentComponent({
         pages,
         router,
         children,
      });
      if (
         !currentComponent ||
         isCurrentComponentForPath({ pages, router, state })
      )
         return;

      dispatch({
         type: mode === "wait" ? "update-unmount" : "update",
         component: currentComponent,
         restorePos: {
            key: router,
            pos: window.scrollY || document.documentElement.scrollTop || 0,
         },
      });
   };

   useEffect(() => {
      if (firstRender.current) {
         firstRender.current = false;
         return;
      }

      if (mode === "wait") {
         timeoutID.current = setTimeout(updateCurrentComponent, millisecond);
      } else {
         updateCurrentComponent();
      }

      return () => {
         clearTimeout(timeoutID.current);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [router]);
};
