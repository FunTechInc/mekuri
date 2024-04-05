"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LINKS } from "@/app/constants";
import s from "./header.module.scss";

const LinkButton = () => {
   const pathname = usePathname();
   return LINKS.map((li, i) => {
      const isActive = li.href === pathname;
      return (
         <li key={i}>
            <Link
               className={s.link}
               href={li.href}
               scroll={false}
               style={
                  isActive
                     ? { backgroundColor: `${li.color}`, color: "white" }
                     : {}
               }>
               {li.title}
               {isActive && li.emoji}
            </Link>
         </li>
      );
   });
};

export const Header = () => {
   return (
      <header className={s.wrapper}>
         <div className={s.logoContainer}>
            <h1 className={s.logo}>
               mekuri <span>📕 Page transition animation for React</span>
            </h1>
            <a
               className={s.github}
               href="https://github.com/FunTechInc/mekuri"
               target="_blank">
               <Image
                  src={"/github-logo.svg"}
                  width={16}
                  height={16}
                  alt="GitHub"
               />
            </a>
         </div>
         <nav className={s.linkWrapper}>
            <LinkButton />
         </nav>
      </header>
   );
};
