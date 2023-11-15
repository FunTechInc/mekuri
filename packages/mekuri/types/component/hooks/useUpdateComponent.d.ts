import { Dispatch } from "react";
import { MekuriState, Mode } from "../../context/MekuriContext";
import { Action } from "../Mekuri";
type UseUpdateComponent = {
    mekuriState: MekuriState;
    mode: Mode;
    children: React.ReactNode;
    setComponentState: Dispatch<Action>;
};
export declare const useUpdateComponent: ({ mekuriState, mode, children, setComponentState, }: UseUpdateComponent) => void;
export {};
