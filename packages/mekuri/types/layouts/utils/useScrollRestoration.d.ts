import { IState } from "./updateComponent.ts";
import { TRestore } from "../../context/MekuriContext.tsx";
interface IUseScrollRestoration {
    state: IState;
    scrollRestoration: TRestore;
}
export declare const useScrollRestoration: ({ scrollRestoration, state, }: IUseScrollRestoration) => void;
export {};
