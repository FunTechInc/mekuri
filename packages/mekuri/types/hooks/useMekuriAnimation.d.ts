type TCallBackProp = {
    prev: string | null | undefined;
    current: string | null | undefined;
    next: string | null | undefined;
    yPosBeforeLeave: number;
    isPrev: (array: string[]) => string | false;
    isCurrent: (array: string[]) => string | false;
    isNext: (array: string[]) => string | false;
    getHashPos: () => number | false;
};
interface IProps {
    isReRender: boolean;
    once?: () => void;
    leave?: (state: TCallBackProp) => void;
    enter?: (state: TCallBackProp) => void;
    afterEnter?: (state: TCallBackProp) => void;
    everyLeave?: (state: TCallBackProp) => void;
    everyEnter?: (state: TCallBackProp) => void;
}
/**
 * usePageMekuriAnimation
 * @param props
 */
export declare const useMekuriAnimation: ({ isReRender, once, leave, enter, afterEnter, everyLeave, everyEnter, }: IProps) => void;
export {};
