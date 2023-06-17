"use client";

import { useEffect } from "react";
import { funtechConsole } from "./_utils/funtechConsole";

export const AppHooks = () => {
   useEffect(() => {
      funtechConsole();
   }, []);
   return null;
};
