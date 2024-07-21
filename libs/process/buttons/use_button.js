"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseButton = UseButton;
function UseButton(customId, interaction, options) {
    const button = options.app.buttons.find((btn) => btn.data.data.custom_id === customId);
    if (button)
        button.exec(options.core, options.client, interaction);
}
