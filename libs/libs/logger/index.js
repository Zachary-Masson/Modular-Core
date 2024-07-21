"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const types_1 = require("./types");
const utils_1 = require("./utils");
const process = __importStar(require("node:process"));
let startTime = Date.now();
class Logger {
    static Enter() {
        console.log("");
    }
    static Start() {
        startTime = Date.now();
    }
    static Categorie(color, name, subname) {
        console.log(`[${color}${name.toUpperCase()}${types_1.Decoration.Reset}] "${color}${types_1.Decoration.Underline}${subname}${types_1.Decoration.Reset}" ↴`);
    }
    static elementOfCategorie(color, name, message) {
        console.log(`       ${color}→ (${color}${name}${types_1.Decoration.Reset}) ${message} ${(0, utils_1.duration)(startTime)}`);
    }
    static Error(message) {
        console.error(`[${types_1.Colors.Red}ERROR${types_1.Decoration.Reset}] ${(0, utils_1.time)()} ${message} ${types_1.Colors.Red}✗${types_1.Decoration.Reset}`);
        process.exit(1);
    }
    static Success(type, message) {
        console.log(`[${types_1.Colors.BrightGreen}${type.toUpperCase()}${types_1.Decoration.Reset}] ${(0, utils_1.time)()} ${message} ${types_1.Colors.BrightGreen}✓${types_1.Decoration.Reset} ${(0, utils_1.duration)(startTime)}`);
    }
    static Info(message) {
        console.log(`[${types_1.Colors.BrightBlue}INFO${types_1.Decoration.Reset}] ${(0, utils_1.time)()} ${message} ${(0, utils_1.duration)(startTime)}`);
    }
    static Module(moduleName, author) {
        console.log(`[${types_1.Colors.Blue}MODULES${types_1.Decoration.Reset}] ${(0, utils_1.time)()} (${types_1.Colors.Blue}${types_1.Decoration.Underline}${moduleName}${types_1.Decoration.Reset}) by ${types_1.Colors.BrightBlue}${author}${types_1.Decoration.Reset} is ${types_1.Colors.BrightGreen}Loaded ✓${types_1.Decoration.Reset} ${(0, utils_1.duration)(startTime)}`);
    }
}
exports.Logger = Logger;
