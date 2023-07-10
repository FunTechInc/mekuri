/// <reference types="react" />
import { TMode, TRouting } from "../../context/MekuriContext";
import { TIsMatchRouting } from "../MekuriLayout";
type TRestorePos = {
    key: string;
    pos: number;
};
export interface IState {
    current: React.ReactNode | null;
    next: React.ReactNode | null;
    restorePos: TRestorePos;
}
export interface IAction {
    type: "update" | "update-unmount" | "unmount-prev" | "rapid-fire";
    component?: React.ReactNode;
    restorePos?: TRestorePos;
}
export declare const componentReducer: (state: IState, action: IAction) => {
    next: string | number | true | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | import("react").ReactFragment | null;
    restorePos: TRestorePos;
    current: React.ReactNode | null;
} | {
    current: string | number | true | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | import("react").ReactFragment | null;
    restorePos: TRestorePos;
    next: React.ReactNode | null;
};
interface IComponentUpdateEffect {
    router: string;
    mode: TMode;
    millisecond: number;
    state: IState;
    routing: TRouting[];
    children: React.ReactNode;
    dispatch: (prop: IAction) => void;
    isMatchRouting: TIsMatchRouting;
}
export declare const useComponentUpdateEffect: ({ router, mode, millisecond, state, routing, children, dispatch, isMatchRouting, }: IComponentUpdateEffect) => void;
export {};
