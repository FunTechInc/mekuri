import Link from "next/link";
import styles from "./style.module.scss";
import Image from "next/image";

type TNav = {
   pathName: "home" | "curtain" | "fadeinout" | "sync" | "wait-sync" | "fluid";
};

export const LinkList = ({ pathName }: TNav) => {
   if (pathName === "home") {
      return (
         <>
            <Link href="/fadeinout">FadeInOut</Link>
            <Link href="/sync">Sync</Link>
            <Link href="/curtain">Curtain</Link>
            <Link href="/wait-sync">Wait-Sync</Link>
            <Link href="/fluid">Fluid</Link>
         </>
      );
   } else if (pathName === "fadeinout") {
      return (
         <>
            <Link href="/fadeinout">ホーム</Link>
            <Link href="/fadeinout/about">アバウト</Link>
         </>
      );
   } else {
      return null;
   }
};

export const Nav = ({ pathName }: TNav) => {
   return (
      <header className={styles.wrapper}>
         <Link href="/" className={styles.logo}>
            <Image
               src="/ft-logo.png"
               width={1606}
               height={1193}
               alt="FunTech"
            />
         </Link>
         <nav className={styles.nav}>
            <LinkList pathName={pathName} />
         </nav>
      </header>
   );
};
