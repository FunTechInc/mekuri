"use client";

import { LinkList, Nav } from "./_component/Nav";
import styles from "./home.module.scss";

export default function Home() {
   return (
      <>
         <Nav pathName="home" />
         <main className={`ly_main ${styles.main}`}>
            <video
               className={`${styles.video}`}
               src="/logo-movie.mp4"
               loop
               muted
               autoPlay
               width={1200}
               height={677}
               playsInline={true}></video>
            <div className={styles.linkWrapper}>
               <LinkList pathName="home" />
            </div>
         </main>
      </>
   );
}
