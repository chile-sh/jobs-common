import amqplib from 'amqplib';
export declare const open: any;
export declare const createChannel: (prefetch?: number) => Promise<any>;
export declare const createQueue: (channel?: any) => (queueName: string, opts?: {
    prefetch?: number;
    assert?: any[];
}, onMsg?: Function, onError?: Function) => Promise<any>;
export declare const sendToQueue: (ch: any) => (queue: string, data: any) => Promise<any>;
export declare const getQueuesInfo: (ch: any, allQueues: any) => Promise<{
    done: boolean;
    queues: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
}>;
interface OptionalParams {
    interval?: number;
    waitOnEnd?: number;
    onStatus?: Function;
    onEnd?: Function;
}
export declare const waitForQueuesToEnd: (ch: any, allQueues: any, { interval, waitOnEnd, onStatus, onEnd }?: OptionalParams) => Promise<{}>;
export default amqplib;
