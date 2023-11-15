/// <reference types="react" />
export type Mode = "sync" | "wait";
export type Phase = "leave" | "enter";
export type ReatrationType = "top" | "restore";
export type Trigger = string | number;
/** Manually do scroll restration with onLeave or onEnter */
type CustomRestration = {
    scrollRestoration: ReatrationType;
    onLeave?: (pos: number) => void;
    onEnter?: (pos: number) => void;
};
export type ScrollRestration = ReatrationType | "none" | CustomRestration;
export type MekuriState = {
    prevTrigger: Trigger | null;
    currentTrigger: Trigger | null;
    nextTrigger: Trigger | null;
    phase: Trigger | null;
    yPosBeforeLeave: number;
};
type DurationState = {
    millisecond: number;
    second: number;
};
type ConstantState = {
    scrollRestoration: ScrollRestration;
    mode: Mode;
};
type MekuriContext = {
    /** @param trigger string | number When doing page transition animation, it is also possible to set pathname and other states to trigger */
    trigger: Trigger;
    /** @param millisecond number Set the wait time in milliseconds before removing from tree. */
    millisecond: number;
    /** @param scrollRestoration "top" | "restore" | "none" | {
    scrollRestoration: "top" | "restore";
    onLeave?: (pos: number) => void;
    onEnter?: (pos: number) => void;
 } If you select none, scrollRestration does nothing. It is also possible to pass an object instead of a string. The onLeave | onEnter function returns pos at the timing of leave or enter. */
    scrollRestoration: ScrollRestration;
    /** @param mode "wait" | "sync" */
    mode: Mode;
    children: React.ReactNode;
};
/**
 * <Mekuri> should be wrapped in this <MekuriContext>. useMekuriAnimation is available inside a context-wrapped component.
 */
export declare const MekuriContext: ({ trigger, millisecond, scrollRestoration, mode, children, }: MekuriContext) => import("react/jsx-runtime").JSX.Element;
export declare const useMekuriDuration: () => DurationState;
export declare const useConstantState: () => ConstantState;
export declare const useMekuriState: () => MekuriState;
export {};
