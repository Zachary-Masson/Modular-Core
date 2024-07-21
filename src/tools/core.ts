import { ConfigCore } from "@types";

export class Core {
  readonly config: ConfigCore;
  constructor(config: ConfigCore) {
    this.config = config;
  }
}
