/// <reference types="react" />
export type TMode = "sync" | "wait";
export type TRestore = "top" | "restore";
export type TComponentItem = {
    path: string;
    component: React.ReactElement;
};
export interface IMekuriLayoutProps {
    componentArr: TComponentItem[];
    children: React.ReactNode;
    mode: TMode;
    scrollRestoration: TRestore;
    router: string;
}
/**
 * MekuriLayout
 * @param props
 */
export declare const MekuriLayout: import("react").NamedExoticComponent<IMekuriLayoutProps>;
