import { Trigger } from "../context/MekuriContext";
import { ReturnHashPosReturn } from "./utils/returnHashPos";
import { HandleIntersectionObserver } from "./utils/intersectionObserver";
export type MekuriCallbackProps = {
    prevTrigger: Trigger | null | undefined;
    currentTrigger: Trigger | null | undefined;
    nextTrigger: Trigger | null | undefined;
    /** Returns the Y position before leaving the page */
    yPosBeforeLeave: number;
    /** If # is attached to the URL when transitioning, the distance to that ID is returned. */
    getHashPos: ReturnHashPosReturn;
    /** intersectionObserver (
       targetRef: React.RefObject<HTMLElement>,
       callback: (isIntersecting: boolean) => void
    ) => void
  * */
    intersectionObserver: HandleIntersectionObserver;
    /** mekuri renders based on timeout. Therefore, there are cases where the next component is rendered before the chunked Stylesheet updated by Next.js is loaded. onStylesheetLoad ensures that functions are executed after the Stylesheet is loaded. onStylesheetLoad ensures that the function is executed after the Stylesheet is loaded */
    onStylesheetLoad: (callback: () => void) => void;
};
type UseMekuriAnimationProps = {
    onOnce?: (props: MekuriCallbackProps) => void;
    onLeave?: (props: MekuriCallbackProps) => void;
    onEnter?: (props: MekuriCallbackProps) => void;
    /** (props: CallBackProp) => void; onEnter in sync mode is called in leave phase. onAfterSyncEnter is called in the enter phase of sync mode. */
    onAfterSyncEnter?: (props: MekuriCallbackProps) => void;
    onEveryLeave?: (props: MekuriCallbackProps) => void;
    onEveryEnter?: (props: MekuriCallbackProps) => void;
};
/**
 * A hook that can be used within <MekuriContext>. Animations can be added to monitor the mounting and unmounting of elements from the tree.
 * The execution timing differs between wait mode and sync mode. Within the context, the execution timing will correspond to the set mode.
 *
 * ```jsx
 * const { second } = useMekuriDuration();
 * useMekuriAnimation({
 * 　　// callback here
 * });
 * ```
 *
 */
export declare const useMekuriAnimation: ({ onOnce, onLeave, onEnter, onAfterSyncEnter, onEveryLeave, onEveryEnter, }: UseMekuriAnimationProps) => void;
export {};
