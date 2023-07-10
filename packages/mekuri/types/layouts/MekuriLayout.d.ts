/// <reference types="react" />
interface IMekuriLayoutProps {
    children: React.ReactNode;
    router: string;
}
export type TIsMatchRouting = {
    current: boolean;
    prev: boolean;
    match: boolean;
};
/**
 * MekuriLayout
 * @param props
 */
export declare const MekuriLayout: ({ router, children }: IMekuriLayoutProps) => import("react/jsx-runtime").JSX.Element;
export {};
