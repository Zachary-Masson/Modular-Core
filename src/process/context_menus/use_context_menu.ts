import { Options } from "@types";
import { Interaction } from "discord.js";

export function UseContextMenu(
  commandName: string,
  interaction: Interaction,
  options: Options,
) {
  const command = [
    ...options.app.context_menu.user,
    ...options.app.context_menu.message,
  ].find((command) => command.data.name === commandName);
  if (command) {
    command.exec(options.core, options.client, interaction);
  }
}
