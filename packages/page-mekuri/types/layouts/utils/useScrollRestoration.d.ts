import { TRestore } from "../MekuriLayout";
import { IState } from "./updateComponent";
interface IUseScrollRestoration {
    state: IState;
    scrollRestoration: TRestore;
}
export declare const useScrollRestoration: ({ scrollRestoration, state, }: IUseScrollRestoration) => void;
export {};
