const isStylesheetLoaded = (url: string) => {
   return Array.from(document.styleSheets).some((styleSheet) => {
      if (!styleSheet.href) return false;
      return styleSheet.href.split("?")[0] === url.split("?")[0];
   });
};

export const onStylesheetLoaded = (callback: () => void) => {
   const pathname = location.pathname;

   const stylesheets = document.querySelectorAll(
      'link[rel="stylesheet"]'
   ) as NodeListOf<HTMLLinkElement>;

   let toBeLoadedCount = stylesheets.length;
   if (toBeLoadedCount === 0) {
      callback();
      return;
   }

   const handleCallback = () => {
      toBeLoadedCount--;
      if (toBeLoadedCount === 0) {
         if (pathname !== location.pathname) return;
         callback();
      }
   };

   stylesheets.forEach((stylesheet) => {
      if (isStylesheetLoaded(stylesheet.href)) {
         handleCallback();
      } else {
         stylesheet.addEventListener("load", handleCallback, {
            once: true,
         });
      }
   });
};
