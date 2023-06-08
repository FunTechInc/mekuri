"use client";

import { usePageMekuriStore } from "./_context/usePageMekuriStore";
import { useUpdatePageMekuriTrigger } from "./_hook/useUpdatePageMekuriTrigger";
import { funtechConsole } from "./_utils/funtechConsole";

export const AppHooks = () => {
   useUpdatePageMekuriTrigger({
      state: usePageMekuriStore((state) => state.pageMekuriTrigger),
      dispatcher: usePageMekuriStore((state) => state.setPageMekuriTrigger),
   });
   // funtechConsole();
   return null;
};
