import { Dispatch } from "react";
import { IMekuriState, TMode } from "../../context/MekuriContext";
import { TAction } from "../Mekuri";
interface IUseUpdateComponent {
    mekuriState: IMekuriState;
    mode: TMode;
    children: React.ReactNode;
    setComponentState: Dispatch<TAction>;
}
export declare const useUpdateComponent: ({ mekuriState, mode, children, setComponentState, }: IUseUpdateComponent) => void;
export {};
