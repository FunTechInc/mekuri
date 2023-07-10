import { createContext, useContext, useReducer, useState } from "react";
import { useUpdateRouterState } from "./useUpdateRouterState";

/*===============================================
type
===============================================*/
export type TRouting = {
   path: string;
   children: React.ReactNode;
};
export type TMode = "sync" | "wait";
export type TRestore = "top" | "restore";

interface IDurationContext {
   millisecond: number;
   second: number;
}
interface IMekuriContext {
   millisecond: number;
   routing: TRouting[];
   scrollRestoration: TRestore;
   mode: TMode;
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
interface IConstantState {
   routing: TRouting[] | null;
   scrollRestoration: TRestore | null;
   mode: TMode | null;
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

const initialConstantState = {
   routing: null,
   scrollRestoration: null,
   mode: null,
};

//create context
const DurationContext = createContext<IDurationContext>(initialDurationState);
const RouterContext = createContext<IRouterState>(initialRouterState);
const ConstantContext = createContext<IConstantState>(initialConstantState);

export const MekuriContext = ({
   millisecond,
   routing,
   scrollRestoration,
   mode,
   router,
   children,
}: IMekuriContext) => {
   //error
   if (routing.length === 0) {
      throw new Error("routing length is empty");
   }
   // duration state
   const [durationState] = useState({
      millisecond,
      second: millisecond / 1000,
   });

   //constat state
   const [constantState] = useState({
      routing,
      scrollRestoration,
      mode,
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
      routing,
   });

   return (
      <DurationContext.Provider value={durationState}>
         <ConstantContext.Provider value={constantState}>
            <RouterContext.Provider value={routerState}>
               {children}
            </RouterContext.Provider>
         </ConstantContext.Provider>
      </DurationContext.Provider>
   );
};

export const useMekuriDuration = () => useContext(DurationContext);
export const useConstantState = () => useContext(ConstantContext);
export const useRouterState = () => useContext(RouterContext);
