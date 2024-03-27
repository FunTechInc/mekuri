import { MekuriState, ScrollRestration } from "../context/MekuriContext";
type UseScrollRestoration = {
    scrollRestoration: ScrollRestration;
    mekuriState: MekuriState;
};
export declare const useScrollRestoration: ({ mekuriState, scrollRestoration, }: UseScrollRestoration) => void;
export {};
