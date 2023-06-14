/// <reference types="react" />
/// <reference types="react/experimental" />
import { IState, TMode, IAction, ComponentItem } from "../../types";
export declare const componentReducer: (state: IState, action: IAction) => {
    next: string | number | true | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | import("react").ReactFragment | import("react").PromiseLikeOfReactNode | null;
    restorePos: {
        key: string;
        pos: number;
    };
    current: import("react").ReactNode;
} | {
    current: string | number | true | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | import("react").ReactFragment | import("react").PromiseLikeOfReactNode | null;
    restorePos: {
        key: string;
        pos: number;
    };
    next: import("react").ReactNode;
};
interface IComponentUpdateEffect {
    pathName: string;
    mode: TMode;
    millisecond: number;
    state: IState;
    componentArr: ComponentItem[];
    children: React.ReactNode;
    dispatch: (prop: IAction) => void;
}
export declare const useComponentUpdateEffect: ({ pathName, mode, millisecond, state, componentArr, children, dispatch, }: IComponentUpdateEffect) => void;
export {};
