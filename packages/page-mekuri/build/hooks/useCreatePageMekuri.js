"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreatePageMekuri = void 0;
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var usePageMekuriStore_1 = require("./usePageMekuriStore");
var changeRegExp_1 = require("../utils/changeRegExp");
var checkPreventPath = function (pathArr, testPath) {
    if (!testPath)
        return false;
    var matchPath = pathArr
        .slice()
        .find(function (path) { return (0, changeRegExp_1.changeRegExp)(path, true).test(testPath); });
    return matchPath ? true : false;
};
var useCreatePageMekuri = function (_a) {
    var millisecond = _a.millisecond, preventArr = _a.preventArr;
    var state = (0, usePageMekuriStore_1.usePageMekuriStore)(function (state) { return state.state; });
    var dispatcher = (0, usePageMekuriStore_1.usePageMekuriStore)(function (state) { return state.dispatch; });
    var pathName = (0, navigation_1.usePathname)();
    var firstRender = (0, react_1.useRef)(true);
    var timeoutID = (0, react_1.useRef)(0);
    (0, react_1.useEffect)(function () {
        if (firstRender.current || checkPreventPath(preventArr, pathName)) {
            firstRender.current = false;
            dispatcher({
                prev: null,
                current: pathName,
                phase: null,
                next: null,
            });
            return;
        }
        //get yPosBeforeLeave
        var scrollYPos = window.pageYOffset || document.documentElement.scrollTop;
        //update state (leave)
        dispatcher({
            next: pathName,
            phase: "leave",
            yPosBeforeLeave: scrollYPos,
        });
        timeoutID.current = setTimeout(function () {
            //update state (enter)
            dispatcher({
                prev: state.current,
                current: pathName,
                next: pathName,
                phase: "enter",
            });
        }, millisecond);
        return function () {
            clearTimeout(timeoutID.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathName]);
};
exports.useCreatePageMekuri = useCreatePageMekuri;
//# sourceMappingURL=useCreatePageMekuri.js.map