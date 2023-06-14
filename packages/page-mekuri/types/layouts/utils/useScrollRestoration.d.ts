import { TRestore, IState } from "../../types";
interface IUseScrollRestoration {
    state: IState;
    scrollRestoration: TRestore;
}
export declare const useScrollRestoration: ({ scrollRestoration, state, }: IUseScrollRestoration) => void;
export {};
