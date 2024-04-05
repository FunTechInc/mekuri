/// <reference types="react" />
export type Mode = "sync" | "wait";
export type Phase = "leave" | "enter";
export type ReatrationType = "top" | "restore";
export type Trigger = string | number;
export type CustomRestrationEvent = (pos: number, isPopstate: boolean) => void;
/** Manually do scroll restration with onLeave or onEnter */
type CustomRestration = {
    scrollRestoration: ReatrationType;
    /**
     * Function to handle actions when leaving a page.
     * @param {number} pos - The position to which the scroll should be restored.
     * @param {boolean} isPopstate - Indicates whether the action is triggered by a popstate event.
     */
    onLeave?: CustomRestrationEvent;
    /**
     * Function to handle actions when leaving a page.
     * @param {number} pos - The position to which the scroll should be restored.
     * @param {boolean} isPopstate - Indicates whether the action is triggered by a popstate event.
     */
    onEnter?: CustomRestrationEvent;
};
export type ScrollRestration = ReatrationType | "none" | CustomRestration;
export type MekuriState = {
    prevTrigger: Trigger | null;
    currentTrigger: Trigger | null;
    nextTrigger: Trigger | null;
    phase: Phase | null;
    isPopstate: boolean;
    yPosBeforeLeave: number;
};
type DurationState = {
    millisecond: number;
    second: number;
};
type ConstantState = {
    scrollRestoration: ScrollRestration;
    mode: Mode;
    waitOnPopstate: boolean;
};
type MekuriContext = {
    /** When doing page transition animation, it is also possible to set pathname and other states to trigger */
    trigger: Trigger;
    children: React.ReactNode;
    /** Set the wait time in milliseconds before removing from tree. , default : `1000` */
    millisecond?: number;
    /** `top` | `restore` | `none` | {
    scrollRestoration: "top" | "restore";
    onLeave?: (pos: number,isPopstate:boolean) => void;
    onEnter?: (pos: number,isPopstate:boolean) => void;
 } If you select none, scrollRestration does nothing. It is also possible to pass an object instead of a string. The onLeave | onEnter function returns pos at the timing of leave or enter, default : `restore` */
    scrollRestoration?: ScrollRestration;
    /** "wait" | "sync" , default : `wait` */
    mode?: Mode;
    /** If the `popstate` event is called while in `sync` mode, it will route in `wait` mode. Valid only in `sync` mode, default : `false` */
    waitOnPopstate?: boolean;
};
/**
 * <Mekuri> should be wrapped in this <MekuriContext>. useMekuriAnimation is available inside a context-wrapped component.
 */
export declare const MekuriContext: ({ trigger, children, millisecond, scrollRestoration, mode, waitOnPopstate, }: MekuriContext) => import("react/jsx-runtime").JSX.Element;
export declare const useMekuriDuration: () => DurationState;
export declare const useConstantState: () => ConstantState;
export declare const useMekuriState: () => MekuriState;
export {};
