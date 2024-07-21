"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonsMapping = ButtonsMapping;
const tools_1 = require("./tools");
function ButtonsMapping(options, moduleDir) {
    if ((0, tools_1.existFolder)(tools_1.TypePath.buttons, options, moduleDir)) {
        const buttons = (0, tools_1.getFiles)(tools_1.TypePath.buttons, options, moduleDir);
        for (const buttonFile of buttons) {
            const buttonImport = (0, tools_1.Import)(tools_1.TypePath.buttons, options, moduleDir, buttonFile);
            options.app.buttons.push(new buttonImport());
        }
    }
}
