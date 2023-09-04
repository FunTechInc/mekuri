import { IMekuriState, TRestore } from "../../context/MekuriContext";
interface IUseScrollRestoration {
    scrollRestoration: TRestore;
    mekuriState: IMekuriState;
}
export declare const useScrollRestoration: ({ mekuriState, scrollRestoration, }: IUseScrollRestoration) => void;
export {};
