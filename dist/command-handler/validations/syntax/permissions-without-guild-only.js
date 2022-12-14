"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NoCliCommandError_1 = __importDefault(require("../../../errors/NoCliCommandError"));
exports.default = (command) => {
    const { commandObject, commandName } = command;
    const { guildOnly = false, permissions = [] } = commandObject;
    if (!guildOnly && permissions.length)
        throw new NoCliCommandError_1.default(`Command "${commandName}" is not a guildOnly command, but permissions are specified.`);
};
