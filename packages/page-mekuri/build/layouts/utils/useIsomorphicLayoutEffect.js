"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsomorphicLayoutEffect = void 0;
var react_1 = require("react");
exports.useIsomorphicLayoutEffect = typeof document !== "undefined" ? react_1.useLayoutEffect : react_1.useEffect;
//# sourceMappingURL=useIsomorphicLayoutEffect.js.map