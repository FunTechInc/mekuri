import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

/*===============================================
いじる
===============================================*/
/********************
const
********************/
export type TPageMekuriDuration = 1000;
export type TPageMekuriStateName = "pageTransitionTrigger";
export const PAGEMEKURISTATE: { mekuri: TState } = {
   mekuri: {
      duration: 1000,
      name: "pageTransitionTrigger",
   },
};
interface IPageMekuriStore {
   pageTransitionTrigger: IPageMekuriProps;
   setPageTransitionTrigger: (props: IPageMekuriProps) => void;
}

/********************
create store
********************/
export const useAppStore = create<
   IPageMekuriStore,
   [["zustand/subscribeWithSelector", never]]
>(
   subscribeWithSelector((set) => ({
      pageTransitionTrigger: {
         path: null,
         phase: null,
         duration: PAGEMEKURISTATE.mekuri.duration,
         second: PAGEMEKURISTATE.mekuri.duration / 1000,
      },
      setPageTransitionTrigger: (props) =>
         set((state) => ({
            ...state,
            pageTransitionTrigger: {
               ...state.pageTransitionTrigger,
               ...props,
            },
         })),
   }))
);

/*===============================================
いじらない
===============================================*/
export interface IPageMekuriProps {
   path?: string | null;
   phase?: "leave" | "enter" | null;
   duration?: TPageMekuriDuration;
   second?: number;
}
type TState = {
   duration: TPageMekuriDuration;
   name: TPageMekuriStateName;
};
