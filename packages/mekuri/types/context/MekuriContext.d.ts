/// <reference types="react" />
export type TMode = "sync" | "wait";
export type TReatrationType = "top" | "restore";
export type TPhase = "leave" | "enter";
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
    phase: TPhase | null;
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
/**
 * <Mekuri> should be wrapped in this <MekuriContext>. UseMekuriAnimation is available inside a context-wrapped component.
 *
 * @param trigger string | number When doing page transition animation, it is also possible to set pathname and other states to trigger
 * @param millisecond number Set the wait time in milliseconds before removing from tree.
 * @param scrollRestoration "top" | "restore" | "none" | {
   scrollRestoration: "top" | "restore";
   onLeave?: (pos: number) => void;
   onEnter?: (pos: number) => void;
} If you select none, scrollRestration does nothing. It is also possible to pass an object instead of a string. The onLeave | onEnter function returns pos at the timing of leave or enter.
 * @param mode "wait" | "sync"
 * @public
 */
export declare const MekuriContext: ({ trigger, millisecond, scrollRestoration, mode, children, }: IMekuriContext) => import("react/jsx-runtime").JSX.Element;
export declare const useMekuriDuration: () => IDurationState;
export declare const useConstantState: () => IConstantState;
export declare const useMekuriState: () => IMekuriState;
export {};
