import type { Options } from "@types";

import { DataSource } from "typeorm";

import { Logger } from "@libs";
import { Core } from "@tools";

import {
  ButtonsMapping,
  CommandsMapping,
  ContextMenus,
  EntitiesMapping,
  EventsMapping,
  exist,
  getModules,
  initialise,
  InsertEntities,
  ManifestMapping,
  verify,
} from "@process/mapping";

import { ModularCommands } from "@entities";

import { EventsManager } from "@process/events";
import { InteractionsManager } from "@process/interactions";
import { ColorResolvable } from "discord.js";

async function ModuleMapping(options: Options) {
  const startTime = Date.now();
  if (!require.main) return;

  initialise(options);

  if (!exist(options.sourceExec)) return;

  options.app = {
    modules: [],
    events: [],
    commands: [],
    buttons: [],
    entities: [],
    context_menu: {
      user: [],
      message: [],
    },
  };

  const modules = getModules(options);

  for (const module of modules) {
    if (!verify(options, module)) continue;

    // Get Manifest
    ManifestMapping(options, module);

    // Get All Entities
    EntitiesMapping(options, module);

    // Get All Events
    EventsMapping(options, module);

    // Get All Commands
    CommandsMapping(options, module);

    // Get All Buttons
    ButtonsMapping(options, module);

    // Get All ContextMenu
    ContextMenus(options, module);
  }

  Logger.Enter();
  Logger.Start();

  const datasource = new DataSource({
    type: "postgres",
    synchronize: true,
    ...options.config.database,
    entities: [ModularCommands, ...options.app.entities],
  });

  await datasource
    .initialize()
    .then(() => {
      Logger.Success("database", "Connecting to the database was a success");
    })
    .catch(() => {
      Logger.Error("An error occurred during database connection");
    });

  Logger.Enter();

  options.datasource = datasource;
  Logger.Start();
  await InsertEntities(options);
  Logger.Success("entities", "All entities were correctly injected");
  Logger.Enter();

  options.core = new Core({
    design: {
      colors: {
        primary: options.config.design.colors.primary as ColorResolvable,
        secondary: options.config.design.colors.secondary as ColorResolvable,
        info: options.config.design.colors.info as ColorResolvable,
        warning: options.config.design.colors.warning as ColorResolvable,
        error: options.config.design.colors.error as ColorResolvable,
      },
    },
  });
  EventsManager(options);
  Logger.Enter();

  Logger.Start();

  await options.client.login(options.config.token);
  await InteractionsManager(options);

  Logger.Enter();
  Logger.Success(
    "MODULAR",
    `Everything went smoothly during modular preloading. In ${((Date.now() - startTime) / 1000).toFixed(1)}s`,
  );
}

export default ModuleMapping;
