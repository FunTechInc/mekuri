"use client";

import { usePageMekuriStore } from "./_context/usePageMekuriStore";
import { useUpdatePageMekuriTrigger } from "./_hook/useUpdatePageMekuriTrigger";

export const AppHooks = () => {
   useUpdatePageMekuriTrigger({
      state: usePageMekuriStore((state) => state.pageMekuriTrigger),
      dispatcher: usePageMekuriStore((state) => state.setPageMekuriTrigger),
   });
   return null;
};
