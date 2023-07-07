import { IState } from "./updateComponent";
import { TRestore } from "../../context/MekuriContext";
interface IUseScrollRestoration {
    state: IState;
    scrollRestoration: TRestore;
}
export declare const useScrollRestoration: ({ scrollRestoration, state, }: IUseScrollRestoration) => void;
export {};
