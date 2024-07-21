import { EventTypes } from "@types";

export function Event(type: EventTypes) {
  return (constructor: Function) => {
    constructor.prototype.type = type;
  };
}
