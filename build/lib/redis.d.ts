import Redis from 'ioredis';
interface CustomRedis extends Redis.Redis {
    hsetJson?(key: string, field: string, val: any): Promise<any>;
    hgetJson?(key: string, field: string): Promise<any>;
    setKeyExp?(key: string, timeStr: string | number, isHash: boolean, expThreshold?: string | number): Promise<any>;
}
declare const createClient: (opts?: {}) => CustomRedis;
export declare const defaultClient: CustomRedis;
export default createClient;
