import type { Options } from "@types";
import { existFolder, getFiles, Import, TypePath } from "./tools";

export function ButtonsMapping(options: Options, moduleDir: string) {
  if (existFolder(TypePath.buttons, options, moduleDir)) {
    const buttons = getFiles(TypePath.buttons, options, moduleDir);

    for (const buttonFile of buttons) {
      const buttonImport = Import(
        TypePath.buttons,
        options,
        moduleDir,
        buttonFile,
      );
      options.app.buttons.push(new buttonImport());
    }
  }
}
