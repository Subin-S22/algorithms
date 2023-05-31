"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMP = void 0;
var COMP;
(function (COMP) {
    COMP[COMP["EQUAL"] = 0] = "EQUAL";
    COMP[COMP["LESSER"] = -1] = "LESSER";
    COMP[COMP["GREATER"] = 1] = "GREATER";
})(COMP = exports.COMP || (exports.COMP = {}));
function compare(a, b) {
    if (a === b)
        return COMP.EQUAL;
    return a < b ? COMP.LESSER : COMP.GREATER;
}
exports.default = compare;
