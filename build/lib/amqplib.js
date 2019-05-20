"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const amqplib_1 = __importDefault(require("amqplib"));
const isFunction_1 = __importDefault(require("lodash/isFunction"));
const config_1 = __importDefault(require("../config"));
const logger_1 = require("./logger");
const { user, pass, host } = config_1.default.rabbitmq;
const url = user && pass ? `amqp://${user}:${pass}@${host}` : `amqp://${host}`;
exports.open = amqplib_1.default.connect(url);
exports.createChannel = async (prefetch) => {
    const conn = await exports.open;
    const ch = await conn.createChannel();
    prefetch && (await ch.prefetch(prefetch));
    return ch;
};
exports.createQueue = (channel) => async (queueName, opts, onMsg, onError) => {
    const { prefetch = 1, assert = [] } = opts;
    try {
        let ch = channel;
        if (!ch) {
            const conn = await exports.open;
            ch = await conn.createChannel();
            await ch.prefetch(prefetch);
        }
        await Promise.all([...assert, queueName].map(q => ch.assertQueue(q)));
        ch.consume(queueName, (msg) => onMsg(msg, ch).catch((err) => onError && onError(ch, msg, err, queueName)), { noAck: false });
        logger_1.logger.info(`[${queueName}] Waiting for messages.`);
        return ch;
    }
    catch (err) {
        logger_1.logError(err);
    }
};
exports.sendToQueue = ch => async (queue, data) => ch.sendToQueue(queue, Buffer.from(JSON.stringify(data)));
exports.getQueuesInfo = async (ch, allQueues) => {
    const queues = await Promise.all(allQueues.map(queue => ch.checkQueue(queue.name)));
    return {
        done: queues.every((queue) => queue.messageCount === 0),
        queues
    };
};
exports.waitForQueuesToEnd = (ch, allQueues, { interval = 1000, waitOnEnd = 5000, onStatus, onEnd } = {}) => new Promise(resolve => {
    const check = async (done) => {
        const status = await exports.getQueuesInfo(ch, allQueues);
        isFunction_1.default(onStatus) && onStatus(status);
        if (done) {
            isFunction_1.default(onEnd) && onEnd(status);
            return resolve(status);
        }
        if (!status.done) {
            return setTimeout(check, interval);
        }
        setTimeout(() => check(true), waitOnEnd);
    };
    check();
});
exports.default = amqplib_1.default;
//# sourceMappingURL=amqplib.js.map