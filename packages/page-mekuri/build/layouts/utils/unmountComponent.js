"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUnmountPrevEffect = void 0;
var react_1 = require("react");
var useIsomorphicLayoutEffect_1 = require("./useIsomorphicLayoutEffect");
var useUnmountPrevEffect = function (_a) {
    var state = _a.state, mode = _a.mode, millisecond = _a.millisecond, dispatch = _a.dispatch;
    var firstRender = (0, react_1.useRef)(true);
    var timeoutID = (0, react_1.useRef)(0);
    /*===============================================
     unmount & cssReset
     ===============================================*/
    var unmountPrev = function () {
        if (mode === "sync") {
            dispatch({
                type: "unmount-prev",
            });
        }
    };
    (0, useIsomorphicLayoutEffect_1.useIsomorphicLayoutEffect)(function () {
        /*===============================================
          prevent
          ===============================================*/
        //first render
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        if (!state.next && mode === "sync") {
            //Prevent the second unmount after switching current to next.
            return;
        }
        /*===============================================
          unmount
          ===============================================*/
        if (mode === "wait") {
            unmountPrev();
        }
        else {
            timeoutID.current = setTimeout(unmountPrev, millisecond);
        }
        return function () {
            clearTimeout(timeoutID.current);
        };
    }, [state.current, state.next]);
};
exports.useUnmountPrevEffect = useUnmountPrevEffect;
//# sourceMappingURL=unmountComponent.js.map