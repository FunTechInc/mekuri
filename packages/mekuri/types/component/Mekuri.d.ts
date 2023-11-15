import { ReactNode } from "react";
export type ComponentState = {
    currentChildren: React.ReactNode | null;
    nextChildren: React.ReactNode | null;
};
export type ActionType = "update" | "update-and-unmount" | "unmount-prev";
export type Action = {
    type: ActionType;
    nextChildren?: React.ReactNode;
};
/**
 * Monitors changes to the trigger set in the context and controls mount and unmount of <Mekuri> child elements.
 * Place <MekuriFreezer> in the first child element when using at page transition.
 */
export declare const Mekuri: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
