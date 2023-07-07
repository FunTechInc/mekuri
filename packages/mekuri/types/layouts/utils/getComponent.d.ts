/// <reference types="react" />
import { IState } from "./updateComponent";
import { TRouting } from "../../context/MekuriContext";
interface IGetCurrentComponent {
    routing: TRouting[];
    router: string;
    children: React.ReactNode;
}
export declare const getCurrentComponent: ({ routing, router, children, }: IGetCurrentComponent) => React.ReactNode;
interface IIsCurrentComponentForPath {
    routing: TRouting[];
    router: string;
    state: IState;
}
export declare const isCurrentComponentForPath: ({ routing, router, state, }: IIsCurrentComponentForPath) => boolean;
export {};
