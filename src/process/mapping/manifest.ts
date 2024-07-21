import type { Options } from "@types";
import { importManifest } from "./tools";
import { Logger } from "@libs";

export function ManifestMapping(options: Options, moduleDir: string) {
  Logger.Start();
  const manifest = importManifest(options, moduleDir);
  options.app.modules.push(manifest);
  Logger.Module(manifest.options.name, manifest.options.author);
}
