import { changeRegExp } from "../../utils/changeRegExp";
import { IState, ComponentItem } from "../../type";

/********************
get the current component by comparing the current pathName with componentArr.
********************/
const testRegExpAndPath = (componentArr: ComponentItem[], pathName: string) => {
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
   componentArr: ComponentItem[];
   pathName: string;
   children: React.ReactNode;
}
export const getCurrentComponent: ({
   componentArr,
   pathName,
   children,
}: IGetCurrentComponent) => React.ReactNode = ({
   componentArr,
   pathName,
   children,
}) => {
   const currentComponent = testRegExpAndPath(componentArr, pathName);
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
   componentArr: ComponentItem[];
   pathName: string;
   state: IState;
}
export const isCurrentComponentForPath = ({
   componentArr,
   pathName,
   state,
}: IIsCurrentComponentForPath) => {
   const currentComponent = testRegExpAndPath(componentArr, pathName);
   return currentComponent?.component === state.current;
};
