import type { Options } from "@types";
import type { Manifest } from "@tools";

import * as fs from "node:fs";
import * as path from "node:path";

export enum TypePath {
  entities = "entities",
  commands = "commands",
  events = "events",
  buttons = "buttons",
  context_menu = "context_menus",
  context_menu_user = "context_menus_user",
  context_menu_message = "context_menus_message",
}

export function getPath(
  options: Options,
  type: TypePath,
  moduleDir: string,
): string {
  return path.join(options.modulesBaseDir, moduleDir, "libs", type);
}

export function getContextPath(
  options: Options,
  type: "user" | "message",
  moduleDir: string,
): string {
  return path.join(
    options.modulesBaseDir,
    moduleDir,
    "libs",
    "context_menus",
    type,
  );
}

export function initialise(options: Options) {
  options.modulesBaseDir = path.join(require.main.path, "modules");
  options.sourceExec = require.main.path;
}

// Exist

export function exist(path: string) {
  return fs.existsSync(path);
}

export function existFolder(
  type: TypePath,
  options: Options,
  moduleDir: string,
) {
  return exist(getPath(options, type, moduleDir));
}

// Get All Files

export function getModules(options: Options) {
  return fs.readdirSync(options.modulesBaseDir);
}

export function getFiles(type: TypePath, options: Options, moduleDir: string) {
  if (type === TypePath.context_menu_user)
    return fs
      .readdirSync(getContextPath(options, "user", moduleDir))
      .filter((f) => !f.endsWith(".js.map"));

  if (type === TypePath.context_menu_message)
    return fs
      .readdirSync(getContextPath(options, "message", moduleDir))
      .filter((f) => !f.endsWith(".js.map"));

  return fs
    .readdirSync(getPath(options, type, moduleDir))
    .filter((f) => !f.endsWith(".js.map"));
}

// Import File

export function importManifest(options: Options, moduleDir: string): Manifest {
  return require(
    path.join(
      options.modulesBaseDir,
      moduleDir,
      options.config.dev ? "module.main" : "module.main.js",
    ),
  ) as Manifest;
}

export function Import(
  type: TypePath,
  options: Options,
  moduleDir: string,
  fileName: string,
) {
  if (type === TypePath.context_menu_user)
    return require(
      path.join(getContextPath(options, "user", moduleDir), fileName),
    );

  if (type === TypePath.context_menu_message)
    return require(
      path.join(getContextPath(options, "message", moduleDir), fileName),
    );

  return require(path.join(getPath(options, type, moduleDir), fileName));
}

// Verification

export function verify(options: Options, moduleDir: string): boolean {
  if (
    options.config.dev &&
    !exist(path.join(options.modulesBaseDir, moduleDir, "module.main.ts"))
  )
    return false;
  else
    return !(
      !options.config.dev &&
      !exist(path.join(options.modulesBaseDir, moduleDir, "module.main.js"))
    );
}
