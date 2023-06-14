"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageMekuriLayout = void 0;
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var updateComponent_1 = require("./utils/updateComponent");
var getComponent_1 = require("./utils/getComponent");
var unmountComponent_1 = require("./utils/unmountComponent");
var useScrollRestoration_1 = require("./utils/useScrollRestoration");
/**
 * PageMekuriLayout
 * @param props
 */
exports.PageMekuriLayout = (0, react_1.memo)(function PageMekuriLayout(_a) {
    var componentArr = _a.componentArr, mode = _a.mode, children = _a.children, scrollRestoration = _a.scrollRestoration, millisecond = _a.millisecond;
    /*===============================================
     １get current component
     ===============================================*/
    var pathName = (0, navigation_1.usePathname)();
    var _b = (0, react_1.useReducer)(updateComponent_1.componentReducer, {
        current: (0, getComponent_1.getCurrentComponent)({ componentArr: componentArr, pathName: pathName, children: children }),
        next: null,
        restorePos: {
            key: pathName,
            pos: 0,
        },
    }), state = _b[0], dispatch = _b[1];
    /*===============================================
     2 update component
     ===============================================*/
    (0, updateComponent_1.useComponentUpdateEffect)({
        pathName: pathName,
        mode: mode,
        millisecond: millisecond,
        state: state,
        componentArr: componentArr,
        children: children,
        dispatch: dispatch,
    });
    /*===============================================
     3 unmount
     ===============================================*/
    (0, unmountComponent_1.useUnmountPrevEffect)({ state: state, mode: mode, millisecond: millisecond, dispatch: dispatch });
    /*===============================================
     4 scroll restoration
     ===============================================*/
    (0, useScrollRestoration_1.useScrollRestoration)({ scrollRestoration: scrollRestoration, state: state });
    /*===============================================
     5 render
     ===============================================*/
    return (<>
         {state.current && state.current}
         {state.next && state.next}
      </>);
});
//# sourceMappingURL=PageMekuriLayout.jsx.map