import type { DataSource } from "typeorm";
import type { Client } from "discord.js";
import type { App, Config } from "@types";
import type { Core } from "@tools";

export type Options = {
  client: Client;
  config: Config;
  datasource?: DataSource;
  app?: App;
  core?: Core;
  sourceExec?: string;
  modulesBaseDir?: string;
};
