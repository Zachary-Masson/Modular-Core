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
exports.CommandsManager = CommandsManager;
const _entities_1 = require("../../entities/index.js");
const _1 = require("./");
const _libs_1 = require("../../libs/index.js");
const types_1 = require("../../libs/logger/types");
function CommandsManager(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const commandsData = options.app.commands.map((command) => command.data);
        commandsData.push(...options.app.context_menu.user.map((command) => command.data));
        commandsData.push(...options.app.context_menu.message.map((command) => command.data));
        let change = false;
        const modularCommandsRepository = options.datasource.getRepository(_entities_1.ModularCommands);
        _libs_1.Logger.Categorie(types_1.Colors.Yellow, "commands", `commands: [${commandsData.length}]`);
        for (const command of commandsData) {
            _libs_1.Logger.Start();
            _libs_1.Logger.elementOfCategorie(types_1.Colors.Yellow, `/${command}`, `This command has been ${types_1.Colors.BrightGreen}Loaded ✓${types_1.Decoration.Reset}`);
            const cmd = yield modularCommandsRepository.findOne({
                where: { name: command.name },
            });
            if (cmd) {
                if (JSON.stringify(cmd.data).length !==
                    JSON.stringify(command.toJSON()).length) {
                    yield modularCommandsRepository.update(cmd.id, {
                        data: command.toJSON(),
                    });
                    change = true;
                }
            }
            else {
                const commandTmp = modularCommandsRepository.create({
                    name: command.name,
                    data: command.toJSON(),
                });
                yield modularCommandsRepository.save(commandTmp);
                change = true;
            }
        }
        _libs_1.Logger.Enter();
        const allCommands = yield modularCommandsRepository.find({
            select: { id: true, name: true },
        });
        for (const command of allCommands) {
            if (!commandsData.find((cmd) => cmd.name === command.name)) {
                yield modularCommandsRepository.delete(command.id);
                change = true;
            }
        }
        if (change) {
            yield (0, _1.SendCommands)(options, commandsData);
        }
        else {
            _libs_1.Logger.Info("No changes were found");
        }
    });
}
