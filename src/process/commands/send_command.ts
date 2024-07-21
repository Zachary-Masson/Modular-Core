import { SlashCommandBuilder, REST, Routes } from "discord.js";
import { Options } from "@types";
import { Logger } from "@libs";
import { Colors, Decoration } from "@libs/logger/types";

export async function SendCommands(
  options: Options,
  commands: SlashCommandBuilder[],
) {
  const rest = new REST({ version: "10" }).setToken(options.config.token);

  try {
    Logger.Info(
      `A change has been detected in the commands, send changes to discord ${Colors.BrightBlue}...${Decoration.Reset}`,
    );

    await rest.put(Routes.applicationCommands(options.client.user.id), {
      body: commands,
    });

    Logger.Success("update_commands", "All changes were made");
  } catch (error) {
    console.error(error);
    Logger.Error("An error occurred during update commands");
  }
}
