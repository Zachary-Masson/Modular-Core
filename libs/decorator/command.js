"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = Command;
function Command(commandData) {
    return (constructor) => {
        constructor.prototype.data = commandData;
    };
}
