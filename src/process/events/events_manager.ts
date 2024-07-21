import type { Options } from "@types";
import { Logger } from "@libs";
import { Colors, Decoration } from "@libs/logger/types";

export function EventsManager(options: Options) {
  const events: string[] = [];

  for (const event of options.app.events) {
    if (!events.includes(event.type)) events.push(event.type);
    options.client.on(event.type, (...args: any[]) =>
      event.exec(options.core, options.client, ...args),
    );
  }

  Logger.Categorie(Colors.Magenta, "events", `events: [${events.join(", ")}]`);
  for (const event of events) {
    Logger.Start();
    Logger.elementOfCategorie(
      Colors.Magenta,
      event,
      `all functions related to this event were correctly ${Colors.BrightGreen}Loaded ✓${Decoration.Reset}`,
    );
  }
}
