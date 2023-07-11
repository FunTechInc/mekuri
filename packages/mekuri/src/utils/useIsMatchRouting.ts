import { useRef, useMemo, useEffect } from "react";
import { testRegExpAndPath } from "./testRegExpAndPath.ts";
import { TRouting } from "../context/MekuriContext.tsx";

export const useIsMatchRouting = ({
   router,
   routing,
}: {
   router: string;
   routing: TRouting[];
}) => {
   const prevRouter = useRef(router);
   const isMatchRouting = useMemo(() => {
      const isCurrent = testRegExpAndPath(routing, router) ? true : false;
      const isPrev = testRegExpAndPath(routing, prevRouter.current)
         ? true
         : false;
      return isCurrent && isPrev;
   }, [routing, router]);
   useEffect(() => {
      prevRouter.current = router;
   }, [router]);
   return isMatchRouting;
};
