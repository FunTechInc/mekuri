import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

interface IPageMekuriProps {
   prev?: string | null;
   current?: string | null;
   next?: string | null;
   phase?: "leave" | "enter" | null;
   yPosBeforeLeave?: number;
}
interface IPageMekuriStore {
   state: IPageMekuriProps;
   dispatch: (props: IPageMekuriProps) => void;
}
export const usePageMekuriStore = create<
   IPageMekuriStore,
   [["zustand/subscribeWithSelector", never]]
>(
   subscribeWithSelector((set) => ({
      state: {
         prev: null,
         current: null,
         next: null,
         phase: null,
         yPosBeforeLeave: 0,
      },
      dispatch: (props) =>
         set((state) => ({
            ...state,
            state: {
               ...state.state,
               ...props,
            },
         })),
   }))
);
