import { TMode } from "../../context/MekuriContext.tsx";
import { IAction, IState } from "./updateComponent.ts";
interface IUnmountPrevEffect {
    state: IState;
    mode: TMode;
    millisecond: number;
    dispatch: (prop: IAction) => void;
    isMatchRouting: boolean;
}
export declare const useUnmountPrevEffect: ({ state, mode, millisecond, dispatch, isMatchRouting, }: IUnmountPrevEffect) => void;
export {};
