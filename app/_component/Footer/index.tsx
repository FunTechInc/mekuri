import styles from "./footer.module.scss";

export const Footer = () => {
   return (
      <footer className={styles.footer}>
         <p>© HASHIMOTO Takuma at FunTech,inc</p>
         <div className={styles.linkList}>
            <p>github</p>
            <p>twitter</p>
         </div>
      </footer>
   );
};
