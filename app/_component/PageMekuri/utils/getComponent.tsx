import { IState, ComponentItem } from "../types";

/********************
componentArrのpathを正規表現に変換する
********************/
const changeRegExp = (string: string) => {
   const regexp =
      string
         .replace(/\//g, "\\/")
         .replace(/\?/g, "\\?")
         .replace(/\#/g, "\\#")
         .replace(/★/g, ".*") + "[\\/#\\?]?.*";
   return new RegExp(regexp);
};

/********************
現在のpathNameとcomponentArrを比較して現在のコンポーネントを取得する
********************/
const testRegExpAndPath = (componentArr: ComponentItem[], pathName: string) => {
   return (
      componentArr
         //copy
         .slice()
         //sort by path string length
         .sort((a, b) => b.path.length - a.path.length)
         //test and return matched element
         .find((route) => changeRegExp(route.path).test(pathName))
   );
};

/*===============================================
pathに対応するコンポーネントを取得する
componentArrに一致するものがない場合はchildrenを返す
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
      console.log("成功");
      return currentComponent.component;
   } else {
      console.log("失敗");
      return children;
   }
};

/*===============================================
現在のコンポーネントと渡ってきたpathNameに対応するコンポーネントが同じ場合、trueを返す
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
