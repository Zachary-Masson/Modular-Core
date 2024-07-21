"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseContextMenu = UseContextMenu;
function UseContextMenu(commandName, interaction, options) {
    const command = [
        ...options.app.context_menu.user,
        ...options.app.context_menu.message,
    ].find((command) => command.data.name === commandName);
    if (command) {
        command.exec(options.core, options.client, interaction);
    }
}
