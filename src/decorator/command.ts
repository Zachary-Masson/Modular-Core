import { SlashCommandBuilder } from "discord.js";

export function Command(commandData: SlashCommandBuilder) {
  return (constructor) => {
    constructor.prototype.data = commandData;
  };
}
