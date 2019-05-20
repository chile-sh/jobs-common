import winston from 'winston';
export declare const logger: winston.Logger;
export declare const logError: (err: Error, prefix?: string) => void;
