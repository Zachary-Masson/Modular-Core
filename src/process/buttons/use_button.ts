import type { Interaction } from "discord.js";
import type { Options } from "@types";

export function UseButton(
  customId: string,
  interaction: Interaction,
  options: Options,
) {
  const button = options.app.buttons.find(
    (btn) => btn.data.data.custom_id === customId,
  );
  if (button) button.exec(options.core, options.client, interaction);
}
