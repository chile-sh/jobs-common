"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const config_1 = __importDefault(require("../config"));
const sentry_1 = __importDefault(require("./sentry"));
exports.logger = winston_1.default.createLogger({
    level: 'info',
    format: winston_1.default.format.json(),
    transports: [
        new winston_1.default.transports.File({ filename: 'error.log', level: 'error' }),
        new winston_1.default.transports.File({ filename: 'combined.log' })
    ]
});
if (!config_1.default.isProd) {
    exports.logger.add(new winston_1.default.transports.Console({
        format: winston_1.default.format.simple()
    }));
}
exports.logError = (err, prefix) => {
    if (!err)
        return;
    if (config_1.default.isProd) {
        sentry_1.default.captureException(err);
    }
    exports.logger.error(`${prefix || ''}${err.message}`);
};
//# sourceMappingURL=logger.js.map