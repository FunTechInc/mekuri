/// <reference types="react" />
interface IDurationContext {
    millisecond: number;
    second: number;
}
interface IMekuriContext {
    millisecond: number;
    preventArr: string[];
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
export declare const MekuriContext: ({ millisecond, preventArr, router, children, }: IMekuriContext) => import("react/jsx-runtime").JSX.Element;
export declare const useMekuriDuration: () => IDurationContext;
export declare const useRouterState: () => IRouterState;
export {};
