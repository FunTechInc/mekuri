import { changeRegExp } from "../../utils/changeRegExp";
import { IState } from "./updateComponent";
import { TComponentItem } from "../MekuriLayout";

/********************
get the current component by comparing the current pathName with componentArr.
********************/
const testRegExpAndPath = (
   componentArr: TComponentItem[],
   pathName: string
) => {
   return (
      componentArr
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
   componentArr: TComponentItem[];
   router: string;
   children: React.ReactNode;
}
export const getCurrentComponent: ({
   componentArr,
   router,
   children,
}: IGetCurrentComponent) => React.ReactNode = ({
   componentArr,
   router,
   children,
}) => {
   const currentComponent = testRegExpAndPath(componentArr, router);
   if (currentComponent) {
      return currentComponent.component;
   } else {
      return children;
   }
};

/*===============================================
Return true if the current component and the component corresponding to the passed pathName are the same.
===============================================*/
interface IIsCurrentComponentForPath {
   componentArr: TComponentItem[];
   router: string;
   state: IState;
}
export const isCurrentComponentForPath = ({
   componentArr,
   router,
   state,
}: IIsCurrentComponentForPath) => {
   const currentComponent = testRegExpAndPath(componentArr, router);
   return currentComponent?.component === state.current;
};
