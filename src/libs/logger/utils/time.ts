import { format } from "date-fns";
import { BgColors, Colors, Decoration } from "../types";

export function time(): string {
  const now = new Date();
  return `${Colors.Gray}${format(now, "[ dd/MM/yyyy - HH'h' : mm'min' : ss'sec' : SSS'ms' ]")}${Decoration.Reset}`;
}

export function duration(startTime: number) {
  const time = Date.now();
  const duration = time - startTime;
  return `${BgColors.BrightGreen + Colors.Black} + ${duration}ms ${Decoration.Reset}`;
}
