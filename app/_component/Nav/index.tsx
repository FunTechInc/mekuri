import Link from "next/link";
import styles from "./style.module.scss";
import Image from "next/image";

export const Nav = () => {
   return (
      <header className={styles.wrapper}>
         <Link href="/" className={styles.title}>
            ページメクリ
         </Link>
         <Image
            className={styles.logo}
            src="/ft-logo.png"
            width={1606}
            height={1193}
            alt="FunTech"
         />
         <nav className={styles.nav}>
            <Link href="/sync/">ホーム</Link>
            <Link href="/sync/about/">アバウト</Link>
         </nav>
      </header>
   );
};
