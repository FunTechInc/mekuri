import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { IPageMekuriProps } from "../_context/usePageMekuriStore";

export const useUpdatePageMekuriTrigger = ({
   state,
   dispatcher,
}: {
   state: IPageMekuriProps;
   dispatcher: (props: IPageMekuriProps) => any;
}) => {
   const pathName = usePathname();
   const firstRender = useRef(true);
   const timeoutID = useRef<NodeJS.Timeout | number>(0);
   useEffect(() => {
      if (firstRender.current) {
         firstRender.current = false;
         return;
      }
      dispatcher({
         path: pathName,
         phase: "leave",
      });
      timeoutID.current = setTimeout(() => {
         dispatcher({
            phase: "enter",
         });
      }, state.duration!);
      return () => {
         clearTimeout(timeoutID.current);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [pathName]);
};
