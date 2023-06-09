import { useRef } from "react";
import { getCurrentComponent, isCurrentComponentForPath } from "./getComponent";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { IState, TMode, IAction, ComponentItem } from "../types";

/*===============================================
コンポーネント用状態管理stateの更新関数
===============================================*/
export const componentReducer = (state: IState, action: IAction) => {
   switch (action.type) {
      //syncモード
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
      //waitモード
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
pathの切り替えに応じて、コンポーネントを更新する
===============================================*/
interface IComponentUpdateEffect {
   pathName: string;
   mode: TMode;
   duration: number;
   state: IState;
   componentArr: ComponentItem[];
   children: React.ReactNode;
   dispatch: (prop: IAction) => void;
}
export const useComponentUpdateEffect = ({
   pathName,
   mode,
   duration,
   state,
   componentArr,
   children,
   dispatch,
}: IComponentUpdateEffect) => {
   const firstRender = useRef(true);
   const timeoutID = useRef<NodeJS.Timeout | number>(0);

   const updateCurrentComponent = () => {
      const currentComponent = getCurrentComponent({
         componentArr,
         pathName,
         children,
      });
      if (
         !currentComponent ||
         isCurrentComponentForPath({ componentArr, pathName, state })
      )
         return;

      dispatch({
         type: mode === "wait" ? "update-unmount" : "update",
         component: currentComponent,
         restorePos: {
            key: pathName,
            pos: window.pageYOffset || document.documentElement.scrollTop || 0,
         },
      });
   };

   useIsomorphicLayoutEffect(() => {
      if (firstRender.current) {
         firstRender.current = false;
         return;
      }

      if (mode === "wait") {
         timeoutID.current = setTimeout(updateCurrentComponent, duration);
      } else {
         updateCurrentComponent();
      }

      return () => {
         clearTimeout(timeoutID.current);
      };
   }, [pathName]);
};
