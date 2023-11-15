import { Dispatch, SetStateAction } from "react";
import { MekuriState, Trigger } from "./MekuriContext";
interface IUseUpdateMekuriState {
    trigger: Trigger;
    setMekuriState: Dispatch<SetStateAction<MekuriState>>;
    millisecond: number;
}
export declare const useUpdateMekuriState: ({ trigger, setMekuriState, millisecond, }: IUseUpdateMekuriState) => void;
export {};
