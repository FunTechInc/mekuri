import { createContext, useContext, useState } from "react";
import { useUpdateMekuriState } from "./useUpdateMekuriState";

export type TMode = "sync" | "wait";
export type TReatrationType = "top" | "restore";
type TCustomRestore = {
   scrollRestoration: TReatrationType;
   onLeave?: (pos: number) => void;
   onEnter?: (pos: number) => void;
};
export type TRestore = TReatrationType | "none" | TCustomRestore;
export type TTrigger = string | number;

export interface IMekuriState {
   initialRender: boolean;
   prevTrigger: TTrigger | null;
   currentTrigger: TTrigger | null;
   nextTrigger: TTrigger | null;
   phase: "leave" | "enter" | null;
   yPosBeforeLeave: number;
}
interface IDurationState {
   millisecond: number;
   second: number;
}
interface IConstantState {
   scrollRestoration: TRestore;
   mode: TMode;
}
interface IMekuriContext {
   trigger: TTrigger;
   millisecond: number;
   scrollRestoration: TRestore;
   mode: TMode;
   children: React.ReactNode;
}

//create context
const defaultDurationState: IDurationState = {
   millisecond: 0,
   second: 0,
};
const defaultMekuriState: IMekuriState = {
   initialRender: false,
   prevTrigger: null,
   currentTrigger: null,
   nextTrigger: null,
   phase: null,
   yPosBeforeLeave: 0,
};
const defaultConstantState: IConstantState = {
   scrollRestoration: "top",
   mode: "wait",
};
const DurationContext = createContext<IDurationState>(defaultDurationState);
const MekuriStateContext = createContext<IMekuriState>(defaultMekuriState);
const ConstantContext = createContext<IConstantState>(defaultConstantState);

/**
 * <Mekuri> should be wrapped in this <MekuriContext>. UseMekuriAnimation is available inside a context-wrapped component.
 *
 * @param trigger string | number When doing page transition animation, it is also possible to set pathname and other states to trigger
 * @param millisecond number Set the wait time in milliseconds before removing from tree.
 * @param scrollRestoration "top" | "restore" | "none" | {
   scrollRestoration: TReatrationType;
   onRestore: (pos: number) => void;
} If you select none, scrollRestration does nothing. It is also possible to pass an object instead of a string. The onRestore function returns pos at the timing of scroll restration.
 * @param mode "wait" | "sync"
 * @public
 */
export const MekuriContext = ({
   trigger,
   millisecond = 1000,
   scrollRestoration = "top",
   mode = "wait",
   children,
}: IMekuriContext) => {
   // duration state
   const [durationState] = useState({
      millisecond,
      second: millisecond / 1000,
   });

   // mekuri state
   const [mekuriState, setMekuriState] = useState<IMekuriState>({
      initialRender: true,
      prevTrigger: null,
      currentTrigger: trigger,
      nextTrigger: null,
      phase: null,
      yPosBeforeLeave: 0,
   });

   // constat state
   const [constantState] = useState({
      scrollRestoration,
      mode,
   });

   // update mekuri state
   useUpdateMekuriState({
      trigger,
      setMekuriState,
      millisecond,
   });

   return (
      <DurationContext.Provider value={durationState}>
         <ConstantContext.Provider value={constantState}>
            <MekuriStateContext.Provider value={mekuriState}>
               {children}
            </MekuriStateContext.Provider>
         </ConstantContext.Provider>
      </DurationContext.Provider>
   );
};

export const useMekuriDuration = () => useContext(DurationContext);
export const useConstantState = () => useContext(ConstantContext);
export const useMekuriState = () => useContext(MekuriStateContext);
