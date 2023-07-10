import { TMode } from "../../context/MekuriContext";
import { IAction, IState } from "./updateComponent";
import { TIsMatchRouting } from "../MekuriLayout";
interface IUnmountPrevEffect {
    state: IState;
    mode: TMode;
    millisecond: number;
    dispatch: (prop: IAction) => void;
    isMatchRouting: TIsMatchRouting;
}
export declare const useUnmountPrevEffect: ({ state, mode, millisecond, dispatch, isMatchRouting, }: IUnmountPrevEffect) => void;
export {};
