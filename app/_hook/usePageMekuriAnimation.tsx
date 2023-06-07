import { useEffect } from "react";
import {
   TPageMekuriStateName,
   usePageMekuriStore,
} from "../_context/usePageMekuriStore";

type TCallBackProp = {
   prev: string | null | undefined;
   next: string | null | undefined;
};

interface IProps {
   isReRender: boolean;
   leave: (state: TCallBackProp) => void;
   enter: (state: TCallBackProp) => void;
   stateName: TPageMekuriStateName;
}

/**
 * usePageMekuriAnimation
 * @param props
 */

export const usePageMekuriAnimation = ({
   isReRender = true,
   leave,
   enter,
   stateName,
}: IProps) => {
   useEffect(() => {
      let pathName = location.pathname;
      const callBackProp: TCallBackProp = {
         prev: null,
         next: null,
      };
      const unsubscribe = usePageMekuriStore.subscribe(
         (state) => state[stateName],
         (state) => {
            //初回renderはreturn
            if (state.path === null) return;
            //prevとnextのpathをanimation callbackに渡す
            if (!callBackProp.prev) {
               callBackProp.prev = state.prev;
            }
            callBackProp.next = state.path;
            if (state.phase === "leave") {
               leave(callBackProp);
            } else if (state.phase === "enter") {
               //ページ遷移後（leaveアニメーション後）かつコンポーネントのアンマウント前のタイミングでenterアニメーションの再発を防ぐ
               //isReRenderがfalseの場合はstateの依存でenterも再発させたい
               if (pathName !== location.pathname && isReRender) return;
               enter(callBackProp);
               //enterのcallbackに渡してからinitialstateを更新する
               callBackProp.prev = state.prev;
            }
         },
         {
            fireImmediately: true,
         }
      );
      return () => {
         unsubscribe();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
};
