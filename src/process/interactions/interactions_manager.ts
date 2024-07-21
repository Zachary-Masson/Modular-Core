import type { Options } from "@types";

import { CommandsManager, UseCommand } from "@process/commands";
import { UseButton } from "@process/buttons";
import { UseContextMenu } from "@process/context_menus";

export async function InteractionsManager(options: Options) {
  await CommandsManager(options);

  options.client.on("interactionCreate", (interaction) => {
    if (interaction.isChatInputCommand())
      return UseCommand(interaction.commandName, interaction, options);
    else if (interaction.isButton())
      return UseButton(interaction.customId, interaction, options);
    else if (
      interaction.isContextMenuCommand() ||
      interaction.isUserContextMenuCommand() ||
      interaction.isMessageContextMenuCommand()
    )
      return UseContextMenu(interaction.commandName, interaction, options);
  });
}
