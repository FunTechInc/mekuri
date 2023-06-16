import { IRouterState } from "./MekuriContext";
interface IUseUpdateRouterState {
    state: IRouterState;
    dispatch: (prop: IRouterState) => void;
    router: string;
    millisecond: number;
    preventArr: string[];
}
export declare const useUpdateRouterState: ({ state, dispatch, millisecond, preventArr, router, }: IUseUpdateRouterState) => void;
export {};
