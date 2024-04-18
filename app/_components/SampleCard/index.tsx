"use client";

import Image from "next/image";
import { useState } from "react";
import s from "./index.module.scss";

export const SampleCard = ({ children }: { children: React.ReactNode }) => {
   const [funkun, setFunkun] = useState(false);

   return (
      <div
         className={s.card}
         onClick={() => {
            setFunkun(!funkun);
         }}>
         {funkun ? (
            <span className={s.funkun}>
               <Image
                  src={"/funkun.png"}
                  width={1440}
                  height={1453}
                  alt="funkun"
               />
            </span>
         ) : (
            <span>{children}</span>
         )}
      </div>
   );
};
