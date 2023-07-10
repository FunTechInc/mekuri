import { useRef, useEffect } from "react";
import { getCurrentComponent, isCurrentComponentForPath } from "./getComponent";
import { TMode, TRouting } from "../../context/MekuriContext";
import { TIsMatchRouting } from "../MekuriLayout";
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
   routing: TRouting[];
   children: React.ReactNode;
   dispatch: (prop: IAction) => void;
   isMatchRouting: TIsMatchRouting;
}

export const useComponentUpdateEffect = ({
   router,
   mode,
   millisecond,
   state,
   routing,
   children,
   dispatch,
   isMatchRouting,
}: IComponentUpdateEffect) => {
   const firstRender = useRef(true);
   const timeoutID = useRef<NodeJS.Timeout | number>(0);

   const updateCurrentComponent = (isReset: boolean | "reset" = false) => {
      const currentComponent = getCurrentComponent({
         routing,
         router,
         children,
      });
      if (
         !currentComponent ||
         isCurrentComponentForPath({ routing, router, state })
      ) {
         return;
      }

      const getType = () => {
         if (isReset === "reset" || mode === "wait") {
            return "update-unmount";
         } else {
            return "update";
         }
      };

      dispatch({
         type: getType(),
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

      //outside of routing.
      if (!isMatchRouting.match) {
         isMatchRouting.current && updateCurrentComponent("reset");
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
