import { Model } from 'objection';
import Job from './Job';
import Asset from './Asset';
export default class Company extends Model {
    readonly id: number;
    name: string;
    slug: string;
    shortDescription?: string;
    description?: string;
    meta?: {};
    logo?: number;
    logoAsset?: Asset;
    jobs?: Job[];
    static tableName: string;
    static relationMappings: () => {
        logoAsset: {
            relation: import("objection").Relation;
            modelClass: string;
            join: {
                from: string;
                to: string;
            };
        };
        jobs: {
            relation: import("objection").Relation;
            modelClass: string;
            join: {
                from: string;
                to: string;
            };
        };
    };
}
