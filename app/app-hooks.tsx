"use client";

import { useAppStore } from "./_context/use-app-store";
import { useUpdatePageTransitionTrigger } from "./_hook/useUpdatePageTransitionTrigger";

export const AppHooks = () => {
   useUpdatePageTransitionTrigger({
      state: useAppStore((state) => state.pageTransitionTrigger),
      dispatcher: useAppStore((state) => state.setPageTransitionTrigger),
   });
   return null;
};
