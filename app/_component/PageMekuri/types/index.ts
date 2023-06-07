import { TPageMekuriDuration } from "@/app/_context/usePageMekuriStore";

/*===============================================
types
===============================================*/
export type TMode = "sync" | "wait";

export type ComponentItem = {
   path: string;
   component: React.ReactElement;
};

export interface IProps {
   componentArr: ComponentItem[];
   children: React.ReactNode;
   mode: TMode;
   duration: TPageMekuriDuration;
}

export interface IState {
   prev: React.ReactNode | null;
   current: React.ReactNode | null;
}

export interface IAction {
   type: "update" | "update-unmount" | "unmount-prev";
   component?: React.ReactNode;
}
