import s from "./footer.module.scss";

export const Footer = () => {
   return (
      <footer className={s.footer}>
         <p>© HASHIMOTO Takuma</p>
         <div className={s.linkList}>
            <a href="https://github.com/FunTechInc/mekuri" target="_blank">
               github
            </a>
            <a href="https://twitter.com/tkm_hmng8" target="_blank">
               twitter
            </a>
         </div>
      </footer>
   );
};
