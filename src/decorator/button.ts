import { ButtonBuilder } from "discord.js";

export function Button(ButtonData: ButtonBuilder) {
  return (constructor: Function) => {
    constructor.prototype.data = ButtonData;
  };
}
