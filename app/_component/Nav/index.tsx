import Link from "next/link";
import styles from "./style.module.scss";
import Image from "next/image";

type TNav = {
   pathName: "home" | "curtain" | "fadeinout" | "sync";
};

export const LinkList = ({ pathName }: TNav) => {
   if (pathName === "home") {
      return (
         <>
            <Link href="/fadeinout">FadeInOut</Link>
            <Link href="/sync">Sync</Link>
            <Link href="/curtain">Curtain</Link>
         </>
      );
   } else if (pathName === "fadeinout") {
      return (
         <>
            <Link href="/fadeinout">ホーム</Link>
            <Link href="/fadeinout/about">アバウト</Link>
         </>
      );
   } else if (pathName === "sync") {
      return (
         <>
            <Link href="/sync">ホーム</Link>
            <Link href="/sync/about">アバウト</Link>
         </>
      );
   } else if (pathName === "curtain") {
      return (
         <>
            <Link href="/curtain">ホーム</Link>
            <Link href="/curtain/about">アバウト</Link>
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
            <Image src="/logo.svg" width={229} height={315} alt="FunTech" />
         </Link>
         <nav className={styles.nav}>
            <LinkList pathName={pathName} />
         </nav>
      </header>
   );
};
