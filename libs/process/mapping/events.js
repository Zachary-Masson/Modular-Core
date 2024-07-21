"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsMapping = EventsMapping;
const tools_1 = require("./tools");
function EventsMapping(options, moduleDir) {
    if ((0, tools_1.existFolder)(tools_1.TypePath.events, options, moduleDir)) {
        const events = (0, tools_1.getFiles)(tools_1.TypePath.events, options, moduleDir);
        for (const eventFile of events) {
            const eventImport = (0, tools_1.Import)(tools_1.TypePath.events, options, moduleDir, eventFile);
            options.app.events.push(new eventImport());
        }
    }
}
