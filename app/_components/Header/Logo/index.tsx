"use client";

import Link from "next/link";
import s from "../header.module.scss";
import gsap from "gsap";
import { useRef } from "react";
import { useMekuriAnimation, useMekuriDuration } from "@/packages/mekuri/src";

export const Logo = () => {
   const ref = useRef(null);
   const { second } = useMekuriDuration();

   useMekuriAnimation({
      isReRender: false,
      everyLeave: () => {
         gsap.to(ref.current, {
            rotate: "+=90",
            duration: second,
         });
      },
   });
   return (
      <h1 ref={ref}>
         <Link className={s.link} href={"/"}>
            (hidden)mekuri
         </Link>
      </h1>
   );
};
