import type { Options } from "@types";
import type { Manifest } from "@tools";
export declare enum TypePath {
    entities = "entities",
    commands = "commands",
    events = "events",
    buttons = "buttons",
    context_menu = "context_menus",
    context_menu_user = "context_menus_user",
    context_menu_message = "context_menus_message"
}
export declare function getPath(options: Options, type: TypePath, moduleDir: string): string;
export declare function getContextPath(options: Options, type: "user" | "message", moduleDir: string): string;
export declare function initialise(options: Options): void;
export declare function exist(path: string): boolean;
export declare function existFolder(type: TypePath, options: Options, moduleDir: string): boolean;
export declare function getModules(options: Options): string[];
export declare function getFiles(type: TypePath, options: Options, moduleDir: string): string[];
export declare function importManifest(options: Options, moduleDir: string): Manifest;
export declare function Import(type: TypePath, options: Options, moduleDir: string, fileName: string): any;
export declare function verify(options: Options, moduleDir: string): boolean;
