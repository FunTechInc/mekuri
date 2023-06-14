"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCurrentComponentForPath = exports.getCurrentComponent = void 0;
var changeRegExp_1 = require("../../utils/changeRegExp");
/********************
get the current component by comparing the current pathName with componentArr.
********************/
var testRegExpAndPath = function (componentArr, pathName) {
    return (componentArr
        //copy
        .slice()
        //sort by path string length
        .sort(function (a, b) { return b.path.length - a.path.length; })
        //test and return matched element
        .find(function (route) { return (0, changeRegExp_1.changeRegExp)(route.path, false).test(pathName); }));
};
var getCurrentComponent = function (_a) {
    var componentArr = _a.componentArr, pathName = _a.pathName, children = _a.children;
    var currentComponent = testRegExpAndPath(componentArr, pathName);
    if (currentComponent) {
        return currentComponent.component;
    }
    else {
        return children;
    }
};
exports.getCurrentComponent = getCurrentComponent;
var isCurrentComponentForPath = function (_a) {
    var componentArr = _a.componentArr, pathName = _a.pathName, state = _a.state;
    var currentComponent = testRegExpAndPath(componentArr, pathName);
    return (currentComponent === null || currentComponent === void 0 ? void 0 : currentComponent.component) === state.current;
};
exports.isCurrentComponentForPath = isCurrentComponentForPath;
//# sourceMappingURL=getComponent.js.map