import { Model } from 'objection';
import Job from './Job';
export default class Company extends Model {
    readonly id: number;
    name: string;
    slug: string;
    shortDescription?: string;
    description?: string;
    logo?: string;
    meta?: {};
    jobs?: Job[];
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
    };
}
