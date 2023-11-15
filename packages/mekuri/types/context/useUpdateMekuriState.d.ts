import { Dispatch, SetStateAction } from "react";
import { MekuriState, Trigger } from "./MekuriContext";
type UseUpdateMekuriStateProps = {
    trigger: Trigger;
    setMekuriState: Dispatch<SetStateAction<MekuriState>>;
    millisecond: number;
};
export declare const useUpdateMekuriState: ({ trigger, setMekuriState, millisecond, }: UseUpdateMekuriStateProps) => void;
export {};
