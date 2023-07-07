/// <reference types="react" />
export type TRouting = {
    path: string;
    children: React.ReactNode;
};
export type TMode = "sync" | "wait";
export type TRestore = "top" | "restore";
interface IDurationContext {
    millisecond: number;
    second: number;
}
interface IMekuriContext {
    millisecond: number;
    routing: TRouting[];
    scrollRestoration: TRestore;
    mode: TMode;
    router: string;
    children: React.ReactNode;
}
export interface IRouterState {
    firstAccess?: boolean;
    prev?: string | null;
    current?: string | null;
    next?: string | null;
    phase?: "leave" | "enter" | null;
    yPosBeforeLeave?: number;
}
interface IConstantState {
    routing: TRouting[] | null;
    scrollRestoration: TRestore | null;
    mode: TMode | null;
}
export declare const MekuriContext: ({ millisecond, routing, scrollRestoration, mode, router, children, }: IMekuriContext) => import("react/jsx-runtime").JSX.Element;
export declare const useMekuriDuration: () => IDurationContext;
export declare const useConstantState: () => IConstantState;
export declare const useRouterState: () => IRouterState;
export {};
