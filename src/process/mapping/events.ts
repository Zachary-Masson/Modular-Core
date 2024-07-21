import type { Options } from "@types";
import { existFolder, getFiles, Import, TypePath } from "./tools";

export function EventsMapping(options: Options, moduleDir: string) {
  if (existFolder(TypePath.events, options, moduleDir)) {
    const events = getFiles(TypePath.events, options, moduleDir);

    for (const eventFile of events) {
      const eventImport = Import(
        TypePath.events,
        options,
        moduleDir,
        eventFile,
      );
      options.app.events.push(new eventImport());
    }
  }
}
