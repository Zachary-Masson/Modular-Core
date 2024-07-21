import type {
  ContextMenuCommandBuilder,
  SlashCommandBuilder,
} from "discord.js";
import type { Options } from "@types";

import { ModularCommands } from "@entities";
import { SendCommands } from "./";
import { Logger } from "@libs";
import { Colors, Decoration } from "@libs/logger/types";

export async function CommandsManager(options: Options) {
  const commandsData: any = options.app.commands.map(
    (command: { data: SlashCommandBuilder }) => command.data,
  );

  commandsData.push(
    ...options.app.context_menu.user.map(
      (command: { data: ContextMenuCommandBuilder }) => command.data,
    ),
  );

  commandsData.push(
    ...options.app.context_menu.message.map(
      (command: { data: ContextMenuCommandBuilder }) => command.data,
    ),
  );

  let change = false;

  const modularCommandsRepository =
    options.datasource.getRepository(ModularCommands);

  Logger.Categorie(
    Colors.Yellow,
    "commands",
    `commands: [${commandsData.length}]`,
  );
  for (const command of commandsData) {
    Logger.Start();
    Logger.elementOfCategorie(
      Colors.Yellow,
      `${command.name}`,
      `This command has been ${Colors.BrightGreen}Loaded ✓${Decoration.Reset}`,
    );
    // Search if command exist in Database
    const cmd = await modularCommandsRepository.findOne({
      where: { name: command.name },
    });
    if (cmd) {
      // if command is update => update database
      if (
        JSON.stringify(cmd.data).length !==
        JSON.stringify(command.toJSON()).length
      ) {
        await modularCommandsRepository.update(cmd.id, {
          data: command.toJSON(),
        });
        change = true;
      }
    } else {
      // but if not exist, create new commands
      const commandTmp = modularCommandsRepository.create({
        name: command.name,
        data: command.toJSON(),
      });

      await modularCommandsRepository.save(commandTmp);
      change = true;
    }
  }
  Logger.Enter();

  // clear command deleted
  const allCommands = await modularCommandsRepository.find({
    select: { id: true, name: true },
  });
  for (const command of allCommands) {
    if (!commandsData.find((cmd) => cmd.name === command.name)) {
      await modularCommandsRepository.delete(command.id);
      change = true;
    }
  }

  // push command in discord
  if (change) {
    await SendCommands(options, commandsData);
  } else {
    Logger.Info("No changes were found");
  }
}
