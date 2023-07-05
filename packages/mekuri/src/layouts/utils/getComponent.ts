import { changeRegExp } from "../../utils/changeRegExp";
import { IState } from "./updateComponent";
import { TPagesItem } from "../MekuriLayout";

/********************
get the current component by comparing the current pathName with componentArr.
********************/
const testRegExpAndPath = (pages: TPagesItem[], pathName: string) => {
   return (
      pages
         //copy
         .slice()
         //sort by path string length
         .sort((a, b) => b.path.length - a.path.length)
         //test and return matched element
         .find((route) => changeRegExp(route.path, false).test(pathName))
   );
};

/*===============================================
get the component corresponding to the path.
If there is no match in componentArr, return children
===============================================*/
interface IGetCurrentComponent {
   pages: TPagesItem[];
   router: string;
   children: React.ReactNode;
}
export const getCurrentComponent: ({
   pages,
   router,
   children,
}: IGetCurrentComponent) => React.ReactNode = ({ pages, router, children }) => {
   const currentComponent = testRegExpAndPath(pages, router);
   if (currentComponent) {
      return currentComponent.children;
   } else {
      return children;
   }
};

/*===============================================
Return true if the current component and the component corresponding to the passed pathName are the same.
===============================================*/
interface IIsCurrentComponentForPath {
   pages: TPagesItem[];
   router: string;
   state: IState;
}
export const isCurrentComponentForPath = ({
   pages,
   router,
   state,
}: IIsCurrentComponentForPath) => {
   const currentComponent = testRegExpAndPath(pages, router);
   return currentComponent?.children === state.current;
};
