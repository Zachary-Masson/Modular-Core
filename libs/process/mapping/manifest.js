"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManifestMapping = ManifestMapping;
const tools_1 = require("./tools");
const _libs_1 = require("../../libs/index.js");
function ManifestMapping(options, moduleDir) {
    _libs_1.Logger.Start();
    const manifest = (0, tools_1.importManifest)(options, moduleDir);
    options.app.modules.push(manifest);
    _libs_1.Logger.Module(manifest.options.name, manifest.options.author);
}
