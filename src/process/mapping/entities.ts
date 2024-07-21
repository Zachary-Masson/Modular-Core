import type { Options } from "@types";
import { existFolder, getFiles, Import, TypePath } from "./tools";

export function EntitiesMapping(options: Options, moduleDir: string) {
  if (existFolder(TypePath.entities, options, moduleDir)) {
    const entities = getFiles(TypePath.entities, options, moduleDir);
    for (const entityFile of entities) {
      const entity = Import(TypePath.entities, options, moduleDir, entityFile);
      options.app.entities.push(entity);
    }
  }
}
