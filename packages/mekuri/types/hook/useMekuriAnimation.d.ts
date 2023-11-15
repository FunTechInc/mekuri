import { Trigger } from "../context/MekuriContext";
import { ReturnHashPosReturn } from "./utils/returnHashPos";
import { IntersectionObserverHandler } from "./utils/intersectionObserverHandler";
type CallBackProps = {
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
    intersectionObserver: IntersectionObserverHandler;
};
type UseMekuriAnimationProps = {
    onOnce?: (props: CallBackProps) => void;
    onLeave?: (props: CallBackProps) => void;
    onEnter?: (props: CallBackProps) => void;
    /** (props: CallBackProp) => void; onEnter in sync mode is called in leave phase. onAfterSyncEnter is called in the enter phase of sync mode. */
    onAfterSyncEnter?: (props: CallBackProps) => void;
    onEveryLeave?: (props: CallBackProps) => void;
    onEveryEnter?: (props: CallBackProps) => void;
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
