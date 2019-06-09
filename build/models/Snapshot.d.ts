import { Model } from 'objection';
import Source from './Source';
export default class Snapshot extends Model {
    readonly id: number;
    processStartedAt?: Date;
    processFinishedAt?: Date;
    info?: string;
    errors?: string;
    version: number;
    current: boolean;
    source: Source;
    static tableName: string;
    static relationMappings: () => {
        source: {
            relation: import("objection").Relation;
            modelClass: string;
            join: {
                from: string;
                to: string;
            };
        };
    };
}
