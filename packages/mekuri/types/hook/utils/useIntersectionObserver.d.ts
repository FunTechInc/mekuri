/// <reference types="react" />
export type HandleIntersectionObserver = (targetRef: React.RefObject<HTMLElement>, callback: (isIntersecting: boolean) => void) => void;
export declare const useIntersectionObserver: () => HandleIntersectionObserver;
