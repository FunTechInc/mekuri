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
exports.usePageMekuriAnimation = void 0;
var react_1 = require("react");
var usePageMekuriStore_1 = require("./usePageMekuriStore");
var changeRegExp_1 = require("../utils/changeRegExp");
//Return a string that matches testPath after normalization.
var returnMatchPath = function (pathArr, testPath) {
    if (!testPath)
        return false;
    var matchPath = pathArr
        .slice()
        .find(function (path) { return (0, changeRegExp_1.changeRegExp)(path, true).test(testPath); });
    return matchPath !== null && matchPath !== void 0 ? matchPath : false;
};
/**
 * usePageMekuriAnimation
 * @param props
 */
var usePageMekuriAnimation = function (_a) {
    var _b = _a.isReRender, isReRender = _b === void 0 ? true : _b, mode = _a.mode, once = _a.once, leave = _a.leave, enter = _a.enter, afterEnter = _a.afterEnter;
    var firstRender = (0, react_1.useRef)(true);
    (0, react_1.useEffect)(function () {
        //Differentiate the calling of leave and enter by comparing the location.pathname at the time of render and the execution time of the state's subscribe function
        var pathName = location.pathname;
        //In sync mode, call the afterEnter callback after enter. However, do not trigger it during the render time of the leave phase.
        var isLeavePhaseRender = false;
        var unsubscribe = usePageMekuriStore_1.usePageMekuriStore.subscribe(function (state) { return state.state; }, function (state) {
            /*===============================================
                prevent first access && render
                once event
                ===============================================*/
            if (state.phase === null) {
                if (firstRender.current) {
                    once && once();
                    firstRender.current = false;
                }
                return;
            }
            /*===============================================
                pass to the leave and enter callback
                ===============================================*/
            var callBackProp = {
                prev: state.prev,
                current: state.current,
                next: state.next,
                yPosBeforeLeave: state.yPosBeforeLeave,
                isPrev: function (pathArr) {
                    return returnMatchPath(pathArr, state.prev);
                },
                isCurrent: function (pathArr) {
                    return returnMatchPath(pathArr, state.current);
                },
                isNext: function (pathArr) {
                    return returnMatchPath(pathArr, state.next);
                },
            };
            /*===============================================
                phases
                ===============================================*/
            if (state.phase === "leave") {
                /*===============================================
                     leave
                     ===============================================*/
                if (mode === "wait") {
                    //wait mode is also intended to be used with isReRender:false, do not prevent by pathName.
                    leave && leave(callBackProp);
                }
                if (mode === "sync") {
                    if (pathName === location.pathname) {
                        enter &&
                            enter(__assign(__assign({}, callBackProp), { prev: state.current, current: state.next, isPrev: function (pathArr) {
                                    return returnMatchPath(pathArr, state.current);
                                }, isCurrent: function (pathArr) {
                                    return returnMatchPath(pathArr, state.next);
                                } }));
                        isLeavePhaseRender = true;
                    }
                    else {
                        leave && leave(callBackProp);
                    }
                }
            }
            else if (state.phase === "enter") {
                /*===============================================
                     enter
                     ===============================================*/
                if (mode === "sync" &&
                    pathName === location.pathname &&
                    !isLeavePhaseRender) {
                    afterEnter && afterEnter(callBackProp);
                }
                //Prevent the enter animation from reoccurring at the timing after the page transition (after the leave animation has completed) and before the component is unmounted. However, if isReRender is false, let the enter animation reoccur due to dependencies on the state.
                if (pathName !== location.pathname && isReRender)
                    return;
                if (mode === "wait") {
                    enter && enter(callBackProp);
                }
            }
        }, {
            fireImmediately: true,
        });
        return function () {
            unsubscribe();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
exports.usePageMekuriAnimation = usePageMekuriAnimation;
//# sourceMappingURL=usePageMekuriAnimation.js.map