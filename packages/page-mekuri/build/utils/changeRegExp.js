"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeRegExp = void 0;
/********************
Convert the path of componentArr into regular expressions.
If isStrict is set to true, a more stringent normalization judgment is performed.
********************/
var changeRegExp = function (string, isStrict) {
    if (isStrict === void 0) { isStrict = false; }
    var prefix = isStrict ? "^" : "";
    var suffix = isStrict ? "(?:[\\/#\\?]|$)$" : "(?:[\\/#\\?]|$)";
    var regexp = prefix +
        string
            .replace(/\//g, "\\/")
            .replace(/\?/g, "\\?")
            .replace(/\#/g, "\\#")
            .replace(/★/g, ".*") +
        suffix;
    return new RegExp(regexp);
};
exports.changeRegExp = changeRegExp;
//# sourceMappingURL=changeRegExp.js.map