import { IState } from "./updateComponent";
import { TMode } from "../MekuriLayout";
import { IAction } from "./updateComponent";
interface IUnmountPrevEffect {
    state: IState;
    mode: TMode;
    millisecond: number;
    dispatch: (prop: IAction) => void;
}
export declare const useUnmountPrevEffect: ({ state, mode, millisecond, dispatch, }: IUnmountPrevEffect) => void;
export {};
