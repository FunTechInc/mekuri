/// <reference types="react" />
import { IState, ComponentItem } from "../../types";
interface IGetCurrentComponent {
    componentArr: ComponentItem[];
    pathName: string;
    children: React.ReactNode;
}
export declare const getCurrentComponent: ({ componentArr, pathName, children, }: IGetCurrentComponent) => React.ReactNode;
interface IIsCurrentComponentForPath {
    componentArr: ComponentItem[];
    pathName: string;
    state: IState;
}
export declare const isCurrentComponentForPath: ({ componentArr, pathName, state, }: IIsCurrentComponentForPath) => boolean;
export {};
