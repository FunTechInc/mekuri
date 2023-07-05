/// <reference types="react" />
export type TMode = "sync" | "wait";
export type TRestore = "top" | "restore";
export type TPagesItem = {
    path: string;
    children: React.ReactNode;
};
export interface IMekuriLayoutProps {
    pages: TPagesItem[];
    children: React.ReactNode;
    mode: TMode;
    scrollRestoration: TRestore;
    router: string;
}
export declare const MekuriLayout: import("react").MemoExoticComponent<({ pages, mode, scrollRestoration, router, children, }: IMekuriLayoutProps) => import("react/jsx-runtime").JSX.Element>;
