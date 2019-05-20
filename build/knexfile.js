"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const { development, production } = config_1.default.knexConfig;
exports.development = development;
exports.production = production;
//# sourceMappingURL=knexfile.js.map