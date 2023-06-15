import { createContext, useContext, useReducer, useState } from "react";
import { useUpdateRouterState } from "../hooks/useUpdateRouterState";
import { IRouterState } from "../type";

interface IDurationContext {
   millisecond: number;
   second: number;
}
interface IMekuriContext {
   millisecond: number;
   preventArr: string[];
   pathName: string;
   children: React.ReactNode;
}

const DurationContext = createContext<IDurationContext | undefined>(undefined);
const RouterContext = createContext<IRouterState | undefined>(undefined);

export const MekuriContext = ({
   millisecond,
   preventArr,
   pathName,
   children,
}: IMekuriContext) => {
   /*===============================================
	グローバルで管理するstateを設定する
	===============================================*/
   const [durationState] = useState({
      millisecond,
      second: millisecond / 1000,
   });

   /*===============================================
	routerに応じて更新されるstateを設定する
	===============================================*/
   const initialRouterState = {
      prev: null,
      current: null,
      next: null,
      phase: null,
      yPosBeforeLeave: 0,
   };
   const [routerState, routerDispatch] = useReducer(
      (prev: IRouterState, props: IRouterState) => ({
         ...prev,
         ...props,
      }),
      initialRouterState
   );

   useUpdateRouterState({
      state: routerState,
      dispatch: routerDispatch,
      router: pathName,
      millisecond,
      preventArr,
   });

   return (
      <DurationContext.Provider value={durationState}>
         <RouterContext.Provider value={routerState}>
            {children}
         </RouterContext.Provider>
      </DurationContext.Provider>
   );
};

export const useMekuriDuration = () => useContext(DurationContext);
export const useRouterState = () => useContext(RouterContext);
