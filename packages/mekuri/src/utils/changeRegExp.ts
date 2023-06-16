/********************
Convert the path of componentArr into regular expressions. 
If isStrict is set to true, a more stringent normalization judgment is performed.
********************/
export const changeRegExp = (string: string, isStrict: boolean = false) => {
   const prefix = isStrict ? "^" : "";
   const suffix = isStrict ? "(?:[\\/#\\?]|$)$" : "(?:[\\/#\\?]|$)";
   const regexp =
      prefix +
      string
         .replace(/\//g, "\\/")
         .replace(/\?/g, "\\?")
         .replace(/\#/g, "\\#")
         .replace(/★/g, ".*") +
      suffix;
   return new RegExp(regexp);
};
