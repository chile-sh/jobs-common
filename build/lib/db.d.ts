import Knex from 'knex';
import { ModelClass } from 'objection';
declare const knex: Knex;
export declare const upsert: (table: string, object: any, constraint: string | string[]) => any;
export declare const first: (model: ModelClass<any>, where: any) => Promise<any>;
export default knex;
