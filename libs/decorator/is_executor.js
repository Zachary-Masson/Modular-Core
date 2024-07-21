"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsExecutor = IsExecutor;
function IsExecutor() {
    return (target, propertyKey, descriptor) => {
        target["exec"] = descriptor.value;
    };
}
