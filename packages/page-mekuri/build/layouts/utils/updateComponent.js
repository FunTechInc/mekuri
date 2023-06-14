"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useComponentUpdateEffect = exports.componentReducer = void 0;
var react_1 = require("react");
var getComponent_1 = require("./getComponent");
var useIsomorphicLayoutEffect_1 = require("./useIsomorphicLayoutEffect");
/*===============================================
update component reducer
===============================================*/
var componentReducer = function (state, action) {
    switch (action.type) {
        //syncモード
        case "update":
            return __assign(__assign({}, state), { next: action.component || null, restorePos: action.restorePos });
        case "unmount-prev":
            return __assign(__assign({}, state), { current: state.next || null, next: null });
        //waitモード
        case "update-unmount":
            return __assign(__assign({}, state), { current: action.component || null, restorePos: action.restorePos });
        default:
            throw new Error();
    }
};
exports.componentReducer = componentReducer;
var useComponentUpdateEffect = function (_a) {
    var pathName = _a.pathName, mode = _a.mode, millisecond = _a.millisecond, state = _a.state, componentArr = _a.componentArr, children = _a.children, dispatch = _a.dispatch;
    var firstRender = (0, react_1.useRef)(true);
    var timeoutID = (0, react_1.useRef)(0);
    var updateCurrentComponent = function () {
        var currentComponent = (0, getComponent_1.getCurrentComponent)({
            componentArr: componentArr,
            pathName: pathName,
            children: children,
        });
        if (!currentComponent ||
            (0, getComponent_1.isCurrentComponentForPath)({ componentArr: componentArr, pathName: pathName, state: state }))
            return;
        dispatch({
            type: mode === "wait" ? "update-unmount" : "update",
            component: currentComponent,
            restorePos: {
                key: pathName,
                pos: window.pageYOffset || document.documentElement.scrollTop || 0,
            },
        });
    };
    (0, useIsomorphicLayoutEffect_1.useIsomorphicLayoutEffect)(function () {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        if (mode === "wait") {
            timeoutID.current = setTimeout(updateCurrentComponent, millisecond);
        }
        else {
            updateCurrentComponent();
        }
        return function () {
            clearTimeout(timeoutID.current);
        };
    }, [pathName]);
};
exports.useComponentUpdateEffect = useComponentUpdateEffect;
//# sourceMappingURL=updateComponent.js.map