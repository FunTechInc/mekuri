import {
   useReducer,
   ReactNode,
   ReactElement,
   Children,
   isValidElement,
   useState,
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
   const { scrollRestoration, mode } = useConstantState();
   const mekuriState = useMekuriState();

   const filteredChildren = onlyElements(children);

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

   if (prevPhase !== mekuriState.phase) {
      setPrevPhase(mekuriState.phase);
      if (mekuriState.phase === "leave") {
         if (mode === "sync") {
            setComponentState({
               type: "leave-sync",
               nextChildren: filteredChildren,
            });
         }
      }
      if (mekuriState.phase === "enter") {
         if (mode === "wait") {
            setComponentState({
               type: "enter-wait",
               nextChildren: filteredChildren,
            });
         }
         if (mode === "sync") {
            setComponentState({
               type: "enter-sync",
            });
         }
      }
   }

   useScrollRestoration({ mekuriState, scrollRestoration });

   return (
      <>
         {componentState.currentChildren}
         {componentState.nextChildren}
      </>
   );
};
