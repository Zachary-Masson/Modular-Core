import { Client, GatewayIntentBits } from "discord.js";
import { Config } from "@types";

// Process
import ModuleMapping from "@process/module_mapping";

class Modular {
  private readonly _config: Config;

  private _client: Client;

  constructor(config: Config) {
    this._config = config;
    this.initialiseClient();
  }

  private initialiseClient() {
    this._client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessagePolls,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildScheduledEvents,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildModeration,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessagePolls,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.AutoModerationConfiguration,
        GatewayIntentBits.AutoModerationExecution,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.DirectMessageReactions,
      ],
    });
  }

  login() {
    ModuleMapping({
      client: this._client,
      config: this._config,
    });
  }
}

export = Modular;
