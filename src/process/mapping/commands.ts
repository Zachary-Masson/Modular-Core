import type { Options } from "@types";
import { existFolder, getFiles, Import, TypePath } from "./tools";

export function CommandsMapping(options: Options, moduleDir: string) {
  if (existFolder(TypePath.commands, options, moduleDir)) {
    const commands = getFiles(TypePath.commands, options, moduleDir);
    const context_menus_user = getFiles(
      TypePath.context_menu_user,
      options,
      moduleDir,
    );
    const context_menus_message = getFiles(
      TypePath.context_menu_message,
      options,
      moduleDir,
    );

    for (const commandFile of commands) {
      const commandImport = Import(
        TypePath.commands,
        options,
        moduleDir,
        commandFile,
      );
      options.app.commands.push(new commandImport());
    }

    for (const contextMenuUserFile of context_menus_user) {
      const contextMenusUserImport = Import(
        TypePath.context_menu_user,
        options,
        moduleDir,
        contextMenuUserFile,
      );
      options.app.context_menu.user.push(new contextMenusUserImport());
    }

    for (const contextMenuMessageFile of context_menus_message) {
      const contextMenusMessageImport = Import(
        TypePath.context_menu_message,
        options,
        moduleDir,
        contextMenuMessageFile,
      );
      options.app.context_menu.message.push(new contextMenusMessageImport());
    }
  }
}
