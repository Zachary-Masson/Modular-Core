"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportButton = ExportButton;
const discord_js_1 = require("discord.js");
function ExportButton(components) {
    return new discord_js_1.ActionRowBuilder().addComponents(components).toJSON();
}
