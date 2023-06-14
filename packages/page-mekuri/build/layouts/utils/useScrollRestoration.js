"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScrollRestoration = void 0;
var react_1 = require("react");
var useIsomorphicLayoutEffect_1 = require("./useIsomorphicLayoutEffect");
/*===============================================
get scroll position by cache
===============================================*/
var getYPosFromCache = function (_a) {
    var cache = _a.cache, key = _a.key, isPopstate = _a.isPopstate, pos = _a.pos;
    /********************
     default transition
     ********************/
    if (isPopstate === false) {
        cache.backPosY = pos;
        cache.keysArr.push(key);
        return 0;
    }
    /********************
     popstate
     ********************/
    if (key === cache.keysArr[cache.keysArr.length - 2]) {
        //restore pos
        cache.keysArr = [key];
        return cache.backPosY || 0;
    }
    //return 0
    return 0;
};
var useScrollRestoration = function (_a) {
    var scrollRestoration = _a.scrollRestoration, state = _a.state;
    var firstRender = (0, react_1.useRef)(true);
    var isPopstate = (0, react_1.useRef)(false);
    var restoreCache = (0, react_1.useRef)({
        backPosY: 0,
        keysArr: [],
    });
    (0, useIsomorphicLayoutEffect_1.useIsomorphicLayoutEffect)(function () {
        if (firstRender.current) {
            if (window.history.scrollRestoration === "auto") {
                window.history.scrollRestoration = "manual";
            }
            window.addEventListener("popstate", function () {
                isPopstate.current = true;
            });
            //push first key
            restoreCache.current.keysArr.push(state.restorePos.key);
            firstRender.current = false;
            return;
        }
        /*===============================================
          scroll restration
          ===============================================*/
        if (scrollRestoration === "top") {
            window.scrollTo({ top: 0 });
        }
        else if (scrollRestoration === "restore") {
            var restorePosY = getYPosFromCache({
                cache: restoreCache.current,
                key: state.restorePos.key,
                isPopstate: isPopstate.current,
                pos: state.restorePos.pos,
            });
            window.scrollTo({ top: restorePosY });
            isPopstate.current = false;
        }
    }, [state.restorePos]);
};
exports.useScrollRestoration = useScrollRestoration;
//# sourceMappingURL=useScrollRestoration.js.map