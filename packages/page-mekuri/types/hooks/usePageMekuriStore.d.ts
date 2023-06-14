interface IPageMekuriProps {
    prev?: string | null;
    current?: string | null;
    next?: string | null;
    phase?: "leave" | "enter" | null;
    yPosBeforeLeave?: number;
}
interface IPageMekuriStore {
    state: IPageMekuriProps;
    dispatch: (props: IPageMekuriProps) => void;
}
export declare const usePageMekuriStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<IPageMekuriStore>, "subscribe"> & {
    subscribe: {
        (listener: (selectedState: IPageMekuriStore, previousSelectedState: IPageMekuriStore) => void): () => void;
        <U>(selector: (state: IPageMekuriStore) => U, listener: (selectedState: U, previousSelectedState: U) => void, options?: {
            equalityFn?: ((a: U, b: U) => boolean) | undefined;
            fireImmediately?: boolean | undefined;
        } | undefined): () => void;
    };
}>;
export {};
