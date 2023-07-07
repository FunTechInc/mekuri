import { changeRegExp } from "./changeRegExp";
import { TRouting } from "../context/MekuriContext";

export const getIsMatchRouting = (
   routing: TRouting[],
   testPath: string
): boolean => {
   if (routing.length === 0) {
      throw new Error("routing length is empty");
   }
   const pathArr = routing.map((route) => route.path);
   const matchPath = pathArr
      .slice()
      .find((path) => changeRegExp(path, true).test(testPath));
   return matchPath ? true : false;
};
