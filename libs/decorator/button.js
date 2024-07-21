"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = Button;
function Button(ButtonData) {
    return (constructor) => {
        constructor.prototype.data = ButtonData;
    };
}
