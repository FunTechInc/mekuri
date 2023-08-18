import { ReactNode } from "react";
import { TTrigger } from "../context/MekuriContext";
type TRestorePos = {
    key: TTrigger;
    pos: number;
};
export type TComponentState = {
    currentChildren: React.ReactNode | null;
    nextChildren: React.ReactNode | null;
    restorePos: TRestorePos;
};
export type TActionType = "update" | "update-unmount" | "unmount-prev" | "rapid-fire";
export type TAction = {
    type: TActionType;
    nextChildren?: React.ReactNode;
    restorePos?: TRestorePos;
};
/**
 * Monitors changes to the trigger set in the context and controls mount and unmount of <Mekuri> child elements.
 * Place <MekuriFreezer> in the first child element when using at page transition.
 *
 * @public
 */
export declare const Mekuri: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export {};
