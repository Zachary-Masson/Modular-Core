import { ManifestOptions } from "@types";

export class Manifest {
  public readonly options: ManifestOptions;

  constructor(options: ManifestOptions) {
    this.options = options;
  }
}
