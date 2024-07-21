"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context_menu = Context_menu;
function Context_menu(commandData) {
    return (constructor) => {
        constructor.prototype.data = commandData;
    };
}
