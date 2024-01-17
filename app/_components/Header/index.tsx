"use client";

import Link from "next/link";
import { useMekuriTrigger } from "@/packages/mekuri/src";
import { memo } from "react";
import s from "./header.module.scss";

const LINKS = [
   {
      href: "/",
      title: "home",
   },
   {
      href: "/page1",
      title: "page1",
   },
   {
      href: "/page2",
      title: "page2",
   },
   {
      href: "/page3",
      title: "page3",
   },
];

const HeaderContent = memo(({ trigger }: { trigger: string }) => {
   return (
      <header className={s.wrapper}>
         <nav className={s.linkWrapper}>
            {LINKS.map((li, i) => (
               <li key={i}>
                  <Link className={s.link} href={li.href} scroll={false}>
                     {li.title}
                  </Link>
               </li>
            ))}
         </nav>
      </header>
   );
});
HeaderContent.displayName = "HeaderContent";

export const Header = memo(() => {
   const trigger = useMekuriTrigger("enter");
   return <HeaderContent trigger={trigger ? trigger.toString() : ""} />;
});

Header.displayName = "Header";
