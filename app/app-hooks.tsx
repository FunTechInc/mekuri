"use client";

import { useStarter } from "@funtech-inc/spice";

export const AppHooks = () => {
   useStarter({
      // reloadThresholds: [960, 560],
      isFixViewportForSmall: true,
      areYouFun: true,
   });
   return null;
};
