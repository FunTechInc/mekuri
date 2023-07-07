import { TRouting, IRouterState } from "./MekuriContext";
interface IUseUpdateRouterState {
    state: IRouterState;
    dispatch: (prop: IRouterState) => void;
    router: string;
    millisecond: number;
    routing: TRouting[];
}
export declare const useUpdateRouterState: ({ state, dispatch, millisecond, routing, router, }: IUseUpdateRouterState) => void;
export {};
