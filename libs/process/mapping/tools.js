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
exports.TypePath = void 0;
exports.getPath = getPath;
exports.getContextPath = getContextPath;
exports.initialise = initialise;
exports.exist = exist;
exports.existFolder = existFolder;
exports.getModules = getModules;
exports.getFiles = getFiles;
exports.importManifest = importManifest;
exports.Import = Import;
exports.verify = verify;
const fs = __importStar(require("node:fs"));
const path = __importStar(require("node:path"));
var TypePath;
(function (TypePath) {
    TypePath["entities"] = "entities";
    TypePath["commands"] = "commands";
    TypePath["events"] = "events";
    TypePath["buttons"] = "buttons";
    TypePath["context_menu"] = "context_menus";
    TypePath["context_menu_user"] = "context_menus_user";
    TypePath["context_menu_message"] = "context_menus_message";
})(TypePath || (exports.TypePath = TypePath = {}));
function getPath(options, type, moduleDir) {
    return path.join(options.modulesBaseDir, moduleDir, "libs", type);
}
function getContextPath(options, type, moduleDir) {
    return path.join(options.modulesBaseDir, moduleDir, "libs", "context_menus", type);
}
function initialise(options) {
    options.modulesBaseDir = path.join(require.main.path, "modules");
    options.sourceExec = require.main.path;
}
function exist(path) {
    return fs.existsSync(path);
}
function existFolder(type, options, moduleDir) {
    return exist(getPath(options, type, moduleDir));
}
function getModules(options) {
    return fs.readdirSync(options.modulesBaseDir);
}
function getFiles(type, options, moduleDir) {
    if (type === TypePath.context_menu_user)
        return fs
            .readdirSync(getContextPath(options, "user", moduleDir))
            .filter((f) => !f.endsWith(".js.map"));
    if (type === TypePath.context_menu_message)
        return fs
            .readdirSync(getContextPath(options, "message", moduleDir))
            .filter((f) => !f.endsWith(".js.map"));
    return fs
        .readdirSync(getPath(options, type, moduleDir))
        .filter((f) => !f.endsWith(".js.map"));
}
function importManifest(options, moduleDir) {
    return require(path.join(options.modulesBaseDir, moduleDir, options.config.dev ? "module.main" : "module.main.js"));
}
function Import(type, options, moduleDir, fileName) {
    if (type === TypePath.context_menu_user)
        return require(path.join(getContextPath(options, "user", moduleDir), fileName));
    if (type === TypePath.context_menu_message)
        return require(path.join(getContextPath(options, "message", moduleDir), fileName));
    return require(path.join(getPath(options, type, moduleDir), fileName));
}
function verify(options, moduleDir) {
    if (options.config.dev &&
        !exist(path.join(options.modulesBaseDir, moduleDir, "module.main.ts")))
        return false;
    else
        return !(!options.config.dev &&
            !exist(path.join(options.modulesBaseDir, moduleDir, "module.main.js")));
}
