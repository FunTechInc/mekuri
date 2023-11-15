import { Dispatch } from "react";
import { MekuriState, Mode } from "../../context/MekuriContext";
import { Action } from "../Mekuri";
type UseRemoveComponent = {
    mekuriState: MekuriState;
    mode: Mode;
    setComponentState: Dispatch<Action>;
};
export declare const useRemoveComponent: ({ mekuriState, mode, setComponentState, }: UseRemoveComponent) => void;
export {};
