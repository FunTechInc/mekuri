import {
   useReducer,
   ReactNode,
   ReactElement,
   Children,
   isValidElement,
} from "react";
import { useUpdateComponent } from "./hooks/useUpdateComponent";
import { useRemoveComponent } from "./hooks/useRemoveComponent";
import { useScrollRestoration } from "./hooks/useScrollRestoration";
import { useConstantState, useMekuriState } from "../context/MekuriContext";

export type ComponentState = {
   currentChildren: React.ReactNode | null;
   nextChildren: React.ReactNode | null;
};
export type ActionType = "update" | "update-and-unmount" | "unmount-prev";
export type Action = {
   type: ActionType;
   nextChildren?: React.ReactNode;
};

/** Filter out any children that aren't ReactElements. */
function onlyElements(children: ReactNode): ReactElement<any>[] {
   return Children.toArray(children).filter(
      isValidElement
   ) as ReactElement<any>[];
}

/**
 * Monitors changes to the trigger set in the context and controls mount and unmount of <Mekuri> child elements.
 * Place <MekuriFreezer> in the first child element when using at page transition.
 */
export const Mekuri = ({ children }: { children: React.ReactNode }) => {
   const { scrollRestoration, mode } = useConstantState();
   const mekuriState = useMekuriState();

   const filteredChildren = onlyElements(children);

   const [componentState, setComponentState] = useReducer(
      (state: ComponentState, action: Action): ComponentState => {
         switch (action.type) {
            case "update":
               return {
                  ...state,
                  nextChildren: action.nextChildren || null,
               };
            case "unmount-prev":
               return {
                  ...state,
                  currentChildren: state.nextChildren || null,
                  nextChildren: null,
               };
            case "update-and-unmount":
               return {
                  ...state,
                  currentChildren: action.nextChildren || null,
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

   useUpdateComponent({
      mekuriState,
      mode,
      children: filteredChildren,
      setComponentState,
   });

   useRemoveComponent({
      mekuriState,
      mode,
      setComponentState,
   });

   useScrollRestoration({ mekuriState, scrollRestoration });

   return (
      <>
         {componentState.currentChildren}
         {componentState.nextChildren}
      </>
   );
};
