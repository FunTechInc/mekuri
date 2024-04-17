"use client";

import { useStarter } from "@funtech-inc/spice";
import { useLenisRegister } from "@/app/_hooks/useLenis";

export const AppHooks = () => {
   useLenisRegister();
   useStarter({
      isFixViewportForSmall: true,
      areYouFun: true,
   });
   return null;
};
