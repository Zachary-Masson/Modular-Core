import { Colors, ColorString, DatabaseOptions } from "@types";
import { ColorResolvable } from "discord.js";
type ConfigDesignColor = Colors | `#${string}` | ColorString;
export interface Config {
    database: DatabaseOptions;
    token: string;
    design: {
        colors: {
            primary: ConfigDesignColor;
            secondary: ConfigDesignColor;
            info: ConfigDesignColor;
            warning: ConfigDesignColor;
            error: ConfigDesignColor;
        };
    };
    dev?: boolean;
}
export interface ConfigCore {
    design: {
        colors: {
            primary: ColorResolvable;
            secondary: ColorResolvable;
            info: ColorResolvable;
            warning: ColorResolvable;
            error: ColorResolvable;
        };
    };
}
export {};
