"use client";

import { useEffect } from "react";
import { useCreatePageMekuri } from "@/packages/page-mekuri/src";
import { funtechConsole } from "./_utils/funtechConsole";

export const PAGEMEKURISTATE = {
   millisecond: 800,
   second: function () {
      return this.millisecond / 1000;
   },
};

export const AppHooks = () => {
   useCreatePageMekuri({
      millisecond: PAGEMEKURISTATE.millisecond,
      preventArr: ["/"],
   });

   useEffect(() => {
      funtechConsole();
   }, []);
   return null;
};
