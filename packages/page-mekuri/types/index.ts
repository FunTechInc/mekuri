export type TMode = "sync" | "wait";
export type TRestore = "top" | "restore";

export type ComponentItem = {
   path: string;
   component: React.ReactElement;
};

export interface IProps {
   componentArr: ComponentItem[];
   children: React.ReactNode;
   mode: TMode;
   scrollRestoration: TRestore;
   millisecond: number;
}

type TRestorePos = {
   key: string;
   pos: number;
};

export interface IState {
   current: React.ReactNode | null;
   next: React.ReactNode | null;
   restorePos: TRestorePos;
}

export interface IAction {
   type: "update" | "update-unmount" | "unmount-prev";
   component?: React.ReactNode;
   restorePos?: TRestorePos;
}
