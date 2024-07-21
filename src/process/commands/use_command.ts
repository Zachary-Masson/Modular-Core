import { Options } from "@types";
import { Interaction } from "discord.js";

export function UseCommand(
  commandName: string,
  interaction: Interaction,
  options: Options,
) {
  const command = options.app.commands.find(
    (command) => command.data.name === commandName,
  );
  if (command) {
    command.exec(options.core, options.client, interaction);
  }
}
