/// <reference types="react" />
export type TIntersectionObserverHandler = (targetRef: React.RefObject<HTMLElement>, callback: (isIntersecting: boolean) => void) => void;
export declare const intersectionObserverHandler: TIntersectionObserverHandler;
