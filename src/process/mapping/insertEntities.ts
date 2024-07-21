import type { Options } from "@types";

export async function InsertEntities(options: Options) {
  const allClass = [
    ...options.app.events,
    ...options.app.commands,
    ...options.app.buttons,
  ];

  for (const event of allClass) {
    if (event.entitiesLoadList) {
      const key = Object.keys(event);
      for (const entityLoad of event.entitiesLoadList) {
        event[key[entityLoad.key]] = options.datasource.getRepository(
          entityLoad.entity,
        );
      }
    }
  }

  return;
}
