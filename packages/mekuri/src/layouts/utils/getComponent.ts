import { IState } from "./updateComponent.ts";
import { TRouting } from "../../context/MekuriContext.tsx";
import { testRegExpAndPath } from "../../utils/testRegExpAndPath.ts";

/*===============================================
get the component corresponding to the path.
If there is no match in componentArr, return children
===============================================*/
interface IGetCurrentComponent {
   routing: TRouting[];
   router: string;
   children: React.ReactNode;
}
export const getCurrentComponent: ({
   routing,
   router,
   children,
}: IGetCurrentComponent) => React.ReactNode = ({
   routing,
   router,
   children,
}) => {
   const currentComponent = testRegExpAndPath(routing, router);
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
   routing: TRouting[];
   router: string;
   state: IState;
}
export const isCurrentComponentForPath = ({
   routing,
   router,
   state,
}: IIsCurrentComponentForPath) => {
   const currentComponent = testRegExpAndPath(routing, router);
   return currentComponent?.children === state.current;
};
