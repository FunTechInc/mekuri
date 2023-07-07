import { TMode } from "../../context/MekuriContext";
import { IAction, IState } from "./updateComponent";
interface IUnmountPrevEffect {
    state: IState;
    mode: TMode;
    millisecond: number;
    dispatch: (prop: IAction) => void;
    isMatchRouting: boolean;
}
export declare const useUnmountPrevEffect: ({ state, mode, millisecond, dispatch, isMatchRouting, }: IUnmountPrevEffect) => void;
export {};
