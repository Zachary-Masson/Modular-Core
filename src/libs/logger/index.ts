import { Colors, Decoration } from "./types";
import { duration, time } from "./utils";
import * as process from "node:process";

let startTime = Date.now();

export class Logger {
  static Enter() {
    console.log("");
  }

  static Start() {
    startTime = Date.now();
  }

  static Categorie(color: Colors, name: string, subname: string) {
    console.log(
      `[${color}${name.toUpperCase()}${Decoration.Reset}] "${color}${Decoration.Underline}${subname}${Decoration.Reset}" ↴`,
    );
  }

  static elementOfCategorie(color: Colors, name: string, message: string) {
    console.log(
      `       ${color}→ (${color}${name}${Decoration.Reset}) ${message} ${duration(startTime)}`,
    );
  }

  static Error(message: string) {
    console.error(
      `[${Colors.Red}ERROR${Decoration.Reset}] ${time()} ${message} ${Colors.Red}✗${Decoration.Reset}`,
    );
    process.exit(1);
  }

  static Success(type: string, message: string) {
    console.log(
      `[${Colors.BrightGreen}${type.toUpperCase()}${Decoration.Reset}] ${time()} ${message} ${Colors.BrightGreen}✓${Decoration.Reset} ${duration(startTime)}`,
    );
  }

  static Info(message: string) {
    console.log(
      `[${Colors.BrightBlue}INFO${Decoration.Reset}] ${time()} ${message} ${duration(startTime)}`,
    );
  }

  static Module(moduleName: string, author: string) {
    console.log(
      `[${Colors.Blue}MODULES${Decoration.Reset}] ${time()} (${Colors.Blue}${Decoration.Underline}${moduleName}${Decoration.Reset}) by ${Colors.BrightBlue}${author}${Decoration.Reset} is ${Colors.BrightGreen}Loaded ✓${Decoration.Reset} ${duration(startTime)}`,
    );
  }
}
