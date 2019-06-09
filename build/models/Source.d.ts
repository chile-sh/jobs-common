import { Model } from 'objection';
import Job from './Job';
import Snapshot from './Snapshot';
export default class Source extends Model {
    readonly id: number;
    name: string;
    slug: string;
    url: string;
    logo?: string;
    jobs: Job[];
    snapshots: Snapshot[];
    static tableName: string;
    static relationMappings: () => {
        jobs: {
            relation: import("objection").Relation;
            modelClass: string;
            join: {
                from: string;
                to: string;
            };
        };
        snapshots: {
            relation: import("objection").Relation;
            modelClass: string;
            join: {
                from: string;
                to: string;
            };
        };
    };
}
