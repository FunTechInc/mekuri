/// <reference types="react" />
import { IState } from "./updateComponent";
import { TComponentItem } from "../MekuriLayout";
interface IGetCurrentComponent {
    componentArr: TComponentItem[];
    router: string;
    children: React.ReactNode;
}
export declare const getCurrentComponent: ({ componentArr, router, children, }: IGetCurrentComponent) => React.ReactNode;
interface IIsCurrentComponentForPath {
    componentArr: TComponentItem[];
    router: string;
    state: IState;
}
export declare const isCurrentComponentForPath: ({ componentArr, router, state, }: IIsCurrentComponentForPath) => boolean;
export {};
