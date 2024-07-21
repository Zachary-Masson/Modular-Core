import type { Options } from "@types";
import { existFolder, getFiles, Import, TypePath } from "./tools";

export function ContextMenus(options: Options, moduleDir: string) {
  if (existFolder(TypePath.context_menu, options, moduleDir)) {
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
