"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = __importStar(require("crypto"));
const ms_1 = __importDefault(require("ms"));
exports.md5 = (str) => crypto
    .createHash('md5')
    .update(str)
    .digest('hex');
exports.joinDots = (...args) => args.filter(Boolean).join('.');
exports.toSeconds = (time) => typeof time === 'number' ? time : ms_1.default(time) / 1000;
//# sourceMappingURL=helpers.js.map