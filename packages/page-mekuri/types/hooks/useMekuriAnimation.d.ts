import { TMode } from "../layouts/MekuriLayout";
type TCallBackProp = {
    prev: string | null | undefined;
    current: string | null | undefined;
    next: string | null | undefined;
    yPosBeforeLeave: number;
    isPrev: (array: string[]) => string | false;
    isCurrent: (array: string[]) => string | false;
    isNext: (array: string[]) => string | false;
};
interface IProps {
    isReRender: boolean;
    mode: TMode;
    once?: () => void;
    leave?: (state: TCallBackProp) => void;
    enter?: (state: TCallBackProp) => void;
    afterEnter?: (state: TCallBackProp) => void;
}
/**
 * usePageMekuriAnimation
 * @param props
 */
export declare const useMekuriAnimation: ({ isReRender, mode, once, leave, enter, afterEnter, }: IProps) => void;
export {};
