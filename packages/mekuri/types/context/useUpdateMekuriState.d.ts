import { Dispatch, SetStateAction } from "react";
import { IMekuriState, TTrigger } from "./MekuriContext";
interface IUseUpdateMekuriState {
    trigger: TTrigger;
    setMekuriState: Dispatch<SetStateAction<IMekuriState>>;
    millisecond: number;
}
export declare const useUpdateMekuriState: ({ trigger, setMekuriState, millisecond, }: IUseUpdateMekuriState) => void;
export {};
