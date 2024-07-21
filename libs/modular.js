"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const discord_js_1 = require("discord.js");
const module_mapping_1 = __importDefault(require("./process/module_mapping"));
class Modular {
    constructor(config) {
        this._config = config;
        this.initialiseClient();
    }
    initialiseClient() {
        this._client = new discord_js_1.Client({
            intents: [
                discord_js_1.GatewayIntentBits.Guilds,
                discord_js_1.GatewayIntentBits.GuildMessages,
                discord_js_1.GatewayIntentBits.MessageContent,
                discord_js_1.GatewayIntentBits.DirectMessagePolls,
                discord_js_1.GatewayIntentBits.GuildWebhooks,
                discord_js_1.GatewayIntentBits.GuildVoiceStates,
                discord_js_1.GatewayIntentBits.GuildScheduledEvents,
                discord_js_1.GatewayIntentBits.GuildPresences,
                discord_js_1.GatewayIntentBits.GuildModeration,
                discord_js_1.GatewayIntentBits.GuildMessageTyping,
                discord_js_1.GatewayIntentBits.GuildMessageReactions,
                discord_js_1.GatewayIntentBits.GuildMessagePolls,
                discord_js_1.GatewayIntentBits.GuildMembers,
                discord_js_1.GatewayIntentBits.GuildInvites,
                discord_js_1.GatewayIntentBits.GuildIntegrations,
                discord_js_1.GatewayIntentBits.GuildEmojisAndStickers,
                discord_js_1.GatewayIntentBits.DirectMessageTyping,
                discord_js_1.GatewayIntentBits.DirectMessages,
                discord_js_1.GatewayIntentBits.AutoModerationConfiguration,
                discord_js_1.GatewayIntentBits.AutoModerationExecution,
                discord_js_1.GatewayIntentBits.DirectMessageTyping,
                discord_js_1.GatewayIntentBits.DirectMessageReactions,
            ],
        });
    }
    login() {
        (0, module_mapping_1.default)({
            client: this._client,
            config: this._config,
        });
    }
}
module.exports = Modular;
