"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = Event;
function Event(type) {
    return (constructor) => {
        constructor.prototype.type = type;
    };
}
