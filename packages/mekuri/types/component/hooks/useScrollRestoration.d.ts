import { TRestore } from "../../context/MekuriContext";
import { TComponentState } from "../Mekuri";
interface IUseScrollRestoration {
    scrollRestoration: TRestore;
    componentState: TComponentState;
}
export declare const useScrollRestoration: ({ scrollRestoration, componentState, }: IUseScrollRestoration) => void;
export {};
