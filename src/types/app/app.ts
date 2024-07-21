import type { Manifest } from "@tools";
import type { EntitySchema } from "typeorm/entity-schema/EntitySchema";

export type App = {
  modules: Manifest[];
  events: any[];
  commands: any[];
  buttons: any[];
  context_menu: {
    message: any[];
    user: any[];
  };
  entities: EntitySchema[];
};
