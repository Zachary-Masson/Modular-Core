import { SlashCommandBuilder } from "discord.js";
import { Options } from "@types";
export declare function SendCommands(options: Options, commands: SlashCommandBuilder[]): Promise<void>;
