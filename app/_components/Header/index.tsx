"use client";

import Link from "next/link";
import s from "./header.module.scss";

export const Header = () => {
   return (
      <header className={s.wrapper}>
         <nav className={s.linkWrapper}>
            <li>
               <Link className={s.link} href={"/"} scroll={false}>
                  home
               </Link>
            </li>
            <li>
               <Link className={s.link} href={"/page1"} scroll={false}>
                  page1
               </Link>
            </li>
            <li>
               <Link className={s.link} href={"/page2"} scroll={false}>
                  page2
               </Link>
            </li>
            <li>
               <Link className={s.link} href={"/page3"} scroll={false}>
                  page3
               </Link>
            </li>
         </nav>
      </header>
   );
};
