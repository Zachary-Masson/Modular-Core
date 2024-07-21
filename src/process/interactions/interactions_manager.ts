import type { Options } from "@types";

import { CommandsManager, UseCommand } from "@process/commands";
import { UseButton } from "@process/buttons";

export async function InteractionsManager(options: Options) {
  await CommandsManager(options);

  options.client.on("interactionCreate", (interaction) => {
    if (interaction.isChatInputCommand())
      return UseCommand(interaction.commandName, interaction, options);
    else if (interaction.isButton())
      return UseButton(interaction.customId, interaction, options);
  });
}
