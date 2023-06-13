import styles from "./footer.module.scss";

export const Footer = () => {
   return (
      <footer className={styles.footer}>
         <p>© HASHIMOTO Takuma at FunTech,inc</p>
         <div className={styles.linkList}>
            <a href="https://github.com/FunTechInc/page-mekuri" target="_blank">
               github
            </a>
            <a href="https://twitter.com/tkm_hmng8" target="_blank">
               twitter
            </a>
         </div>
      </footer>
   );
};
