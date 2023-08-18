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
import {
   useConstantState,
   useMekuriState,
   TTrigger,
} from "../context/MekuriContext";

type TRestorePos = {
   key: TTrigger;
   pos: number;
};
export type TComponentState = {
   currentChildren: React.ReactNode | null;
   nextChildren: React.ReactNode | null;
   restorePos: TRestorePos;
};
export type TActionType =
   | "update"
   | "update-unmount"
   | "unmount-prev"
   | "rapid-fire";
export type TAction = {
   type: TActionType;
   nextChildren?: React.ReactNode;
   restorePos?: TRestorePos;
};

const updateComponent = (
   state: TComponentState,
   action: TAction
): TComponentState => {
   switch (action.type) {
      // sync mode
      case "update":
         return {
            ...state,
            nextChildren: action.nextChildren || null,
            restorePos: action.restorePos!,
         };
      case "unmount-prev":
         return {
            ...state,
            currentChildren: state.nextChildren || null,
            nextChildren: null,
         };
      // wait mode
      case "update-unmount":
         return {
            ...state,
            currentChildren: action.nextChildren || null,
            restorePos: action.restorePos!,
         };
      default:
         throw new Error();
   }
};

function onlyElements(children: ReactNode): ReactElement<any>[] {
   return Children.toArray(children).filter(
      isValidElement
   ) as ReactElement<any>[];
}

/**
 * Monitors changes to the trigger set in the context and controls mount and unmount of <Mekuri> child elements.
 * Place <MekuriFreezer> in the first child element when using at page transition.
 *
 * @public
 */
export const Mekuri = ({ children }: { children: React.ReactNode }) => {
   // Filter out any children that aren't ReactElements.
   const filteredChildren = onlyElements(children);

   // get state from context
   const { scrollRestoration, mode } = useConstantState();
   const mekuriState = useMekuriState();

   // set component state
   const [componentState, setComponentState] = useReducer(updateComponent, {
      currentChildren: filteredChildren,
      nextChildren: null,
      restorePos: {
         key: mekuriState.currentTrigger ?? "",
         pos: 0,
      },
   });

   // update component
   useUpdateComponent({
      mekuriState,
      mode,
      children: filteredChildren,
      setComponentState,
   });

   // remove component
   useRemoveComponent({
      mekuriState,
      mode,
      setComponentState,
   });

   // scroll restoration
   useScrollRestoration({ scrollRestoration, componentState });

   return (
      <>
         {componentState.currentChildren}
         {componentState.nextChildren}
      </>
   );
};
