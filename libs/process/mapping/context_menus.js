"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextMenus = ContextMenus;
const tools_1 = require("./tools");
function ContextMenus(options, moduleDir) {
    if ((0, tools_1.existFolder)(tools_1.TypePath.context_menu, options, moduleDir)) {
        const context_menus_user = (0, tools_1.getFiles)(tools_1.TypePath.context_menu_user, options, moduleDir);
        const context_menus_message = (0, tools_1.getFiles)(tools_1.TypePath.context_menu_message, options, moduleDir);
        for (const contextMenuUserFile of context_menus_user) {
            const contextMenusUserImport = (0, tools_1.Import)(tools_1.TypePath.context_menu_user, options, moduleDir, contextMenuUserFile);
            options.app.context_menu.user.push(new contextMenusUserImport());
        }
        for (const contextMenuMessageFile of context_menus_message) {
            const contextMenusMessageImport = (0, tools_1.Import)(tools_1.TypePath.context_menu_message, options, moduleDir, contextMenuMessageFile);
            options.app.context_menu.message.push(new contextMenusMessageImport());
        }
    }
}
