import { TTrigger } from "../context/MekuriContext";
type TCallBackProp = {
    prevTrigger: TTrigger | null | undefined;
    currentTrigger: TTrigger | null | undefined;
    nextTrigger: TTrigger | null | undefined;
    yPosBeforeLeave: number;
    getHashPos: () => number | false;
};
interface IProps {
    onOnce?: () => void;
    onLeave?: (state: TCallBackProp) => void;
    onEnter?: (state: TCallBackProp) => void;
    onEveryLeave?: (state: TCallBackProp) => void;
    onEveryEnter?: (state: TCallBackProp) => void;
}
/**
 * A hook that can be used within <MekuriContext>. Animations can be added to monitor the mounting and unmounting of elements from the tree.
 * The execution timing differs between wait mode and sync mode. Within the context, the execution timing will correspond to the set mode.
 *
 * @param onOnce () => void; Called only once on first access and first rendering.
 * @param onLeave (state: TCallBackProp) => void;
 * @param onEnter (state: TCallBackProp) => void;
 * @param onEveryLeave (state: TCallBackProp) => void;
 * @param onEveryEnter (state: TCallBackProp) => void;
 *
 * `CallBackProp`
 *
 *  prevTrigger,currentTrigger,nextTrigger => returns the respective trigger
 *
 *  yPosBeforeLeave => Returns the Y position before leaving the page
 *
 *  getHashPos => If # is attached to the URL when transitioning, the distance to that ID is returned.
 *
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
