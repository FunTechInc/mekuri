export type TReturnHashPos = () => number | false;

export const returnHashPos: TReturnHashPos = () => {
   const hash = window.location.hash.substring(1);
   if (!hash) {
      return false;
   }
   const target = document.getElementById(hash);
   if (!target) {
      return false;
   }
   const scrollYPos = window.scrollY || document.documentElement.scrollTop;
   const pos = target.getBoundingClientRect().top + scrollYPos;
   return pos;
};
