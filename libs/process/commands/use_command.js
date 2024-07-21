"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCommand = UseCommand;
function UseCommand(commandName, interaction, options) {
    const command = options.app.commands.find((command) => command.data.name === commandName);
    if (command) {
        command.exec(options.core, options.client, interaction);
    }
}
