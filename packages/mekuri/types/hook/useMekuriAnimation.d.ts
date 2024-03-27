import { Trigger } from "../context/MekuriContext";
import { ReturnHashPosReturn } from "./utils/returnHashPos";
import { HandleIntersectionObserver } from "./utils/useIntersectionObserver";
export type MekuriCallBackProps = {
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
    /** mekuri renders based on timeout. Therefore, there are cases where the next component is rendered before the chunked Stylesheet updated by Next.js is loaded. onStylesheetLoaded ensures that functions are executed after the Stylesheet is loaded. onStylesheetLoaded ensures that the function is executed after the Stylesheet is loaded */
    onStylesheetLoaded: (callback: () => void) => void;
};
type UseMekuriAnimationProps = {
    onOnce?: (props: MekuriCallBackProps) => void;
    onLeave?: (props: MekuriCallBackProps) => void;
    onEnter?: (props: MekuriCallBackProps) => void;
    /** (props: CallBackProp) => void; onEnter in sync mode is called in leave phase. onAfterSyncEnter is called in the enter phase of sync mode. */
    onAfterSyncEnter?: (props: MekuriCallBackProps) => void;
    onEveryLeave?: (props: MekuriCallBackProps) => void;
    onEveryEnter?: (props: MekuriCallBackProps) => void;
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
