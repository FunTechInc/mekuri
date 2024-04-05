import { Phase } from "../context/MekuriContext";
/**
 * @param phase `enter` | `leave` , Specify the phase to subscribe to trigger updates
 */
export declare const useMekuriTrigger: (phase: Phase) => import("../context/MekuriContext").Trigger | null;
