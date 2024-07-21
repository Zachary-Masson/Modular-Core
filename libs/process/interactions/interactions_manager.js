"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractionsManager = InteractionsManager;
const commands_1 = require("../commands");
const buttons_1 = require("../buttons");
const context_menus_1 = require("../context_menus");
function InteractionsManager(options) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, commands_1.CommandsManager)(options);
        options.client.on("interactionCreate", (interaction) => {
            if (interaction.isChatInputCommand())
                return (0, commands_1.UseCommand)(interaction.commandName, interaction, options);
            else if (interaction.isButton())
                return (0, buttons_1.UseButton)(interaction.customId, interaction, options);
            else if (interaction.isContextMenuCommand() ||
                interaction.isUserContextMenuCommand() ||
                interaction.isMessageContextMenuCommand())
                return (0, context_menus_1.UseContextMenu)(interaction.commandName, interaction, options);
        });
    });
}
