"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = __importDefault(require("ioredis"));
const config_1 = __importDefault(require("../config"));
const logger_1 = require("./logger");
const helpers_1 = require("./helpers");
const createClient = (opts = {}) => {
    const { prefix } = config_1.default.redis;
    const client = new ioredis_1.default({
        host: config_1.default.redis.host,
        password: config_1.default.redis.password,
        db: 0,
        keyPrefix: prefix ? `${prefix}:` : undefined,
        ...opts
    });
    client.hsetJson = (key, field, val) => client.hset(key, field, JSON.stringify(val));
    client.hgetJson = async (key, field) => {
        const str = await client.hget(key, field);
        if (!str)
            return str;
        try {
            return JSON.parse(str);
        }
        catch (err) {
            return str;
        }
    };
    /**
     * Set expiration in seconds for a given redis key
     * If the remaining TTL is lower than the value set on `expThreshold`,
     * it will empty the key/hash.
     *
     * @param key
     * @param timeStr any `ms` lib compatible string, any integer will be in seconds
     * @param isHash
     * @param expThreshold same as timeStr
     *
     * @example
     *  redis.setKeyExp('cache', '1 day', true, 3600)
     */
    client.setKeyExp = async (key, timeStr, isHash, expThreshold = 0) => {
        const create = () => isHash ? client.hset(key, '', '') : client.set(key, '');
        const exists = await client.exists(key);
        if (!exists)
            await create();
        const ttl = await client.ttl(key);
        if (ttl < helpers_1.toSeconds(expThreshold)) {
            await client.del(key);
            await create();
            return client.expire(key, helpers_1.toSeconds(timeStr));
        }
    };
    client.on('error', logger_1.logError);
    return client;
};
exports.defaultClient = createClient();
exports.default = createClient;
//# sourceMappingURL=redis.js.map