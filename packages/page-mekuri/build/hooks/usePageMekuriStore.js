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
exports.usePageMekuriStore = void 0;
var zustand_1 = require("zustand");
var middleware_1 = require("zustand/middleware");
exports.usePageMekuriStore = (0, zustand_1.create)((0, middleware_1.subscribeWithSelector)(function (set) { return ({
    state: {
        prev: null,
        current: null,
        next: null,
        phase: null,
        yPosBeforeLeave: 0,
    },
    dispatch: function (props) {
        return set(function (state) { return (__assign(__assign({}, state), { state: __assign(__assign({}, state.state), props) })); });
    },
}); }));
//# sourceMappingURL=usePageMekuriStore.js.map