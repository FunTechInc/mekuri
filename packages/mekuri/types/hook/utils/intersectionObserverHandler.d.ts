/// <reference types="react" />
export type TIntersectionObserverHandler = (targetRef: React.RefObject<HTMLElement>, callback: (isIntersecting: boolean) => void) => void;
/**
 * The second argument callback function receives the intersection judgment of the first argument ref.
 * @param targetRef React.RefObject<HTMLElement>
 * @param callback (isIntersecting: boolean) => void
) => void;
 */
export declare const intersectionObserverHandler: TIntersectionObserverHandler;
