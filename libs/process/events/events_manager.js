"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsManager = EventsManager;
const _libs_1 = require("../../libs/index.js");
const types_1 = require("../../libs/logger/types");
function EventsManager(options) {
    const events = [];
    for (const event of options.app.events) {
        if (!events.includes(event.type))
            events.push(event.type);
        options.client.on(event.type, (...args) => event.exec(options.core, options.client, ...args));
    }
    _libs_1.Logger.Categorie(types_1.Colors.Magenta, "events", `events: [${events.join(", ")}]`);
    for (const event of events) {
        _libs_1.Logger.Start();
        _libs_1.Logger.elementOfCategorie(types_1.Colors.Magenta, event, `all functions related to this event were correctly ${types_1.Colors.BrightGreen}Loaded ✓${types_1.Decoration.Reset}`);
    }
}
