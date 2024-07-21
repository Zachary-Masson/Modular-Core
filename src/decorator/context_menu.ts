import { ContextMenuCommandBuilder } from "discord.js";

export function Context_menu(commandData: ContextMenuCommandBuilder) {
  return (constructor) => {
    constructor.prototype.data = commandData;
  };
}
