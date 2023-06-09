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
         dispatcher({
            prev: null,
            current: pathName,
            next: null,
         });
         return;
      }
      //get yPosBeforeLeave
      const scrollYPos =
         window.pageYOffset || document.documentElement.scrollTop;
      //update state (leave)
      dispatcher({
         next: pathName,
         phase: "leave",
         yPosBeforeLeave: scrollYPos,
      });
      timeoutID.current = setTimeout(() => {
         //update state (enter)
         dispatcher({
            prev: state.current,
            current: pathName,
            next: pathName,
            phase: "enter",
         });
      }, state.duration!);
      return () => {
         clearTimeout(timeoutID.current);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [pathName]);
};
