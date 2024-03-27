import { ReactNode } from "react";
/**
 * Monitors changes to the trigger set in the context and controls mount and unmount of <Mekuri> child elements.
 * When used in page transitions with the App Router, place <MekuriFreezer> as the first child element.
 */
export declare const Mekuri: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
