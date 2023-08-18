import { Dispatch } from "react";
import { IMekuriState, TMode } from "../../context/MekuriContext";
import { TAction } from "../Mekuri";
interface IUseRemoveComponent {
    mekuriState: IMekuriState;
    mode: TMode;
    setComponentState: Dispatch<TAction>;
}
export declare const useRemoveComponent: ({ mekuriState, mode, setComponentState, }: IUseRemoveComponent) => void;
export {};
