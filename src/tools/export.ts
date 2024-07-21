import { ActionRowBuilder, ButtonBuilder } from "discord.js";

export function ExportButton(components: ButtonBuilder) {
  return new ActionRowBuilder().addComponents(components).toJSON();
}
