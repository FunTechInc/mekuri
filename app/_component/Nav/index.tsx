import Link from "next/link";
import styles from "./style.module.scss";

export const Nav = () => {
   return (
      <nav className={styles.nav}>
         <Link href="/">HOME</Link>
         <Link href="/about">ABOUT</Link>
      </nav>
   );
};
