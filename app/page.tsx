"use client";

import { LinkList, Nav } from "./_component/Nav";
import styles from "./home.module.scss";

export default function Home() {
   return (
      <>
         <Nav pathName="home" />
         <main className={`ly_main ${styles.main}`}>
            <div className={styles.linkWrapper}>
               <LinkList pathName="home" />
            </div>
         </main>
      </>
   );
}
