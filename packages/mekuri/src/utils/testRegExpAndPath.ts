import { TRouting } from "../context/MekuriContext";
import { changeRegExp } from "./changeRegExp";

/*===============================================
get the current component by comparing the current pathName with componentArr.
===============================================*/
export const testRegExpAndPath = (routing: TRouting[], pathName: string) => {
   return (
      routing
         //copy
         .slice()
         //sort by path string length
         .sort((a, b) => b.path.length - a.path.length)
         //test and return matched element
         .find((route) => changeRegExp(route.path, false).test(pathName))
   );
};
