import { createContext, useContext, useReducer, useState } from "react";
import { useUpdateRouterState } from "./useUpdateRouterState";

/*===============================================
type
===============================================*/
interface IDurationContext {
   millisecond: number;
   second: number;
}
interface IMekuriContext {
   millisecond: number;
   preventArr: string[];
   router: string;
   children: React.ReactNode;
}
export interface IRouterState {
   firstAccess?: boolean;
   prev?: string | null;
   current?: string | null;
   next?: string | null;
   phase?: "leave" | "enter" | null;
   yPosBeforeLeave?: number;
}

/*===============================================
constant
===============================================*/
const initialRouterState = {
   firstAccess: true,
   prev: null,
   current: null,
   next: null,
   phase: null,
   yPosBeforeLeave: 0,
};

const initialDurationState = {
   millisecond: 0,
   second: 0,
};

//create context
const DurationContext = createContext<IDurationContext>(initialDurationState);
const RouterContext = createContext<IRouterState>(initialRouterState);

/*===============================================
component
===============================================*/
export const MekuriContext = ({
   millisecond,
   preventArr,
   router,
   children,
}: IMekuriContext) => {
   // duration state
   const [durationState] = useState({
      millisecond,
      second: millisecond / 1000,
   });

   //router state
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
      router: router,
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
