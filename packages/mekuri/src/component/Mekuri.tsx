import {
   useReducer,
   ReactNode,
   ReactElement,
   Children,
   isValidElement,
   useState,
   useMemo,
} from "react";
import { useScrollRestoration } from "./useScrollRestoration";
import { useConstantState, useMekuriState } from "../context/MekuriContext";

type ComponentState = {
   currentChildren: React.ReactNode | null;
   nextChildren: React.ReactNode | null;
};

type Action = {
   type: "leave-sync" | "enter-wait" | "enter-sync";
   nextChildren?: React.ReactNode;
};

/** Filter out any children that aren't ReactElements. */
const onlyElements = (children: ReactNode): ReactElement<any>[] => {
   return Children.toArray(children).filter(
      isValidElement
   ) as ReactElement<any>[];
};

/**
 * Monitors changes to the trigger set in the context and controls mount and unmount of <Mekuri> child elements.
 * When used in page transitions with the App Router, place <MekuriFreezer> as the first child element.
 */
export const Mekuri = ({ children }: { children: React.ReactNode }) => {
   const { scrollRestoration, mode, waitOnPopstate } = useConstantState();
   const mekuriState = useMekuriState();

   useScrollRestoration({ mekuriState, scrollRestoration });

   const filteredChildren = useMemo(() => onlyElements(children), [children]);

   const [componentState, setComponentState] = useReducer(
      (state: ComponentState, action: Action): ComponentState => {
         switch (action.type) {
            case "leave-sync":
               return {
                  ...state,
                  nextChildren: action.nextChildren || null,
               };
            case "enter-wait":
               return {
                  ...state,
                  currentChildren: action.nextChildren || null,
               };
            case "enter-sync":
               return {
                  ...state,
                  currentChildren: state.nextChildren || null,
                  nextChildren: null,
               };
            default:
               throw new Error();
         }
      },
      {
         currentChildren: filteredChildren,
         nextChildren: null,
      }
   );

   const [prevPhase, setPrevPhase] = useState(mekuriState.phase);
   // Whether to transition in sync mode when popstate
   const isSyncOnPopstate = !waitOnPopstate || !mekuriState.isPopstate;

   if (prevPhase !== mekuriState.phase) {
      setPrevPhase(mekuriState.phase);
      // *** leave ***
      if (mekuriState.phase === "leave") {
         // *** sync ***
         if (mode === "sync") {
            if (isSyncOnPopstate) {
               setComponentState({
                  type: "leave-sync",
                  nextChildren: filteredChildren,
               });
            }
         }
      }
      // *** enter ***
      if (mekuriState.phase === "enter") {
         // *** wait ***
         if (mode === "wait") {
            setComponentState({
               type: "enter-wait",
               nextChildren: filteredChildren,
            });
         }
         // *** sync ***
         if (mode === "sync") {
            if (isSyncOnPopstate) {
               setComponentState({
                  type: "enter-sync",
               });
            } else {
               setComponentState({
                  type: "enter-wait",
                  nextChildren: filteredChildren,
               });
            }
         }
      }
   }

   return (
      <>
         {componentState.currentChildren}
         {componentState.nextChildren}
      </>
   );
};
