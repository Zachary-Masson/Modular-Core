"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const _libs_1 = require("../libs/index.js");
const _tools_1 = require("../tools/index.js");
const mapping_1 = require("./mapping");
const _entities_1 = require("../entities/index.js");
const events_1 = require("./events");
const interactions_1 = require("./interactions");
function ModuleMapping(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const startTime = Date.now();
        if (!require.main)
            return;
        (0, mapping_1.initialise)(options);
        if (!(0, mapping_1.exist)(options.sourceExec))
            return;
        options.app = {
            modules: [],
            events: [],
            commands: [],
            buttons: [],
            entities: [],
            context_menu: {
                user: [],
                message: [],
            },
        };
        const modules = (0, mapping_1.getModules)(options);
        for (const module of modules) {
            if (!(0, mapping_1.verify)(options, module))
                continue;
            (0, mapping_1.ManifestMapping)(options, module);
            (0, mapping_1.EntitiesMapping)(options, module);
            (0, mapping_1.EventsMapping)(options, module);
            (0, mapping_1.CommandsMapping)(options, module);
            (0, mapping_1.ButtonsMapping)(options, module);
            (0, mapping_1.ContextMenus)(options, module);
        }
        _libs_1.Logger.Enter();
        _libs_1.Logger.Start();
        const datasource = new typeorm_1.DataSource(Object.assign(Object.assign({ type: "postgres", synchronize: true }, options.config.database), { entities: [_entities_1.ModularCommands, ...options.app.entities] }));
        yield datasource
            .initialize()
            .then(() => {
            _libs_1.Logger.Success("database", "Connecting to the database was a success");
        })
            .catch(() => {
            _libs_1.Logger.Error("An error occurred during database connection");
        });
        _libs_1.Logger.Enter();
        options.datasource = datasource;
        _libs_1.Logger.Start();
        yield (0, mapping_1.InsertEntities)(options);
        _libs_1.Logger.Success("entities", "All entities were correctly injected");
        _libs_1.Logger.Enter();
        options.core = new _tools_1.Core({
            design: {
                colors: {
                    primary: options.config.design.colors.primary,
                    secondary: options.config.design.colors.secondary,
                    info: options.config.design.colors.info,
                    warning: options.config.design.colors.warning,
                    error: options.config.design.colors.error,
                },
            },
        });
        (0, events_1.EventsManager)(options);
        _libs_1.Logger.Enter();
        _libs_1.Logger.Start();
        yield options.client.login(options.config.token);
        yield (0, interactions_1.InteractionsManager)(options);
        _libs_1.Logger.Enter();
        _libs_1.Logger.Success("MODULAR", `Everything went smoothly during modular preloading. In ${((Date.now() - startTime) / 1000).toFixed(1)}s`);
    });
}
exports.default = ModuleMapping;
