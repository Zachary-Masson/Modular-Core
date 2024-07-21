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
exports.SendCommands = SendCommands;
const discord_js_1 = require("discord.js");
const _libs_1 = require("../../libs/index.js");
const types_1 = require("../../libs/logger/types");
function SendCommands(options, commands) {
    return __awaiter(this, void 0, void 0, function* () {
        const rest = new discord_js_1.REST({ version: "10" }).setToken(options.config.token);
        try {
            _libs_1.Logger.Info(`A change has been detected in the commands, send changes to discord ${types_1.Colors.BrightBlue}...${types_1.Decoration.Reset}`);
            yield rest.put(discord_js_1.Routes.applicationCommands(options.client.user.id), {
                body: commands,
            });
            _libs_1.Logger.Success("update_commands", "All changes were made");
        }
        catch (error) {
            console.error(error);
            _libs_1.Logger.Error("An error occurred during update commands");
        }
    });
}
