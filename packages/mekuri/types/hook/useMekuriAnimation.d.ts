import { TTrigger } from "../context/MekuriContext";
import { TReturnHashPos } from "./utils/returnHashPos";
import { TIntersectionObserverHandler } from "./utils/intersectionObserverHandler";
type TCallBackProp = {
    prevTrigger: TTrigger | null | undefined;
    currentTrigger: TTrigger | null | undefined;
    nextTrigger: TTrigger | null | undefined;
    yPosBeforeLeave: number;
    getHashPos: TReturnHashPos;
    intersectionObserver: TIntersectionObserverHandler;
};
interface IProps {
    onOnce?: (props: TCallBackProp) => void;
    onLeave?: (props: TCallBackProp) => void;
    onEnter?: (props: TCallBackProp) => void;
    onEveryLeave?: (props: TCallBackProp) => void;
    onEveryEnter?: (props: TCallBackProp) => void;
}
/**
 * A hook that can be used within <MekuriContext>. Animations can be added to monitor the mounting and unmounting of elements from the tree.
 * The execution timing differs between wait mode and sync mode. Within the context, the execution timing will correspond to the set mode.
 *
 * @param onOnce (props: TCallBackProp) => void; Called only once on first access and first rendering.
 * @param onLeave (props: TCallBackProp) => void;
 * @param onEnter (props: TCallBackProp) => void;
 * @param onEveryLeave (props: TCallBackProp) => void;
 * @param onEveryEnter (props: TCallBackProp) => void;
 *
 * `CallBackProp`
 *
 *  prevTrigger,currentTrigger,nextTrigger => returns the respective trigger
 *
 *  yPosBeforeLeave => Returns the Y position before leaving the page
 *
 *  getHashPos => If # is attached to the URL when transitioning, the distance to that ID is returned.
 *
 * intersectionObserver (
      targetRef: React.RefObject<HTMLElement>,
      callback: (isIntersecting: boolean) => void
   ) => void
 *
 * ```jsx
 * const { second } = useMekuriDuration();
 * useMekuriAnimation({
 * 　　onEveryLeave: () => {
 * 　　　　gsap.to(ref.current, {
 * 　　　　　　opacity: 0,
 * 　　　　　　duration: second,
 * 　　　　　　ease: "power3.out",
 * 　　　　});
 * 　　},
 * });
 * ```
 *
 * @public
 */
export declare const useMekuriAnimation: ({ onOnce, onLeave, onEnter, onEveryLeave, onEveryEnter, }: IProps) => void;
export {};
