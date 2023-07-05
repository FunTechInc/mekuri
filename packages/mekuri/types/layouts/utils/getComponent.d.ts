/// <reference types="react" />
import { IState } from "./updateComponent";
import { TPagesItem } from "../MekuriLayout";
interface IGetCurrentComponent {
    pages: TPagesItem[];
    router: string;
    children: React.ReactNode;
}
export declare const getCurrentComponent: ({ pages, router, children, }: IGetCurrentComponent) => React.ReactNode;
interface IIsCurrentComponentForPath {
    pages: TPagesItem[];
    router: string;
    state: IState;
}
export declare const isCurrentComponentForPath: ({ pages, router, state, }: IIsCurrentComponentForPath) => boolean;
export {};
