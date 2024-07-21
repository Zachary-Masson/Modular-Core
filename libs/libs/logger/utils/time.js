"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.time = time;
exports.duration = duration;
const date_fns_1 = require("date-fns");
const types_1 = require("../types");
function time() {
    const now = new Date();
    return `${types_1.Colors.Gray}${(0, date_fns_1.format)(now, "[ dd/MM/yyyy - HH'h' : mm'min' : ss'sec' : SSS'ms' ]")}${types_1.Decoration.Reset}`;
}
function duration(startTime) {
    const time = Date.now();
    const duration = time - startTime;
    return `${types_1.BgColors.BrightGreen + types_1.Colors.Black} + ${duration}ms ${types_1.Decoration.Reset}`;
}
