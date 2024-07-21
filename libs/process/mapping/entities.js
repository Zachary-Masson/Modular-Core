"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntitiesMapping = EntitiesMapping;
const tools_1 = require("./tools");
function EntitiesMapping(options, moduleDir) {
    if ((0, tools_1.existFolder)(tools_1.TypePath.entities, options, moduleDir)) {
        const entities = (0, tools_1.getFiles)(tools_1.TypePath.entities, options, moduleDir);
        for (const entityFile of entities) {
            const entity = (0, tools_1.Import)(tools_1.TypePath.entities, options, moduleDir, entityFile);
            options.app.entities.push(entity);
        }
    }
}
