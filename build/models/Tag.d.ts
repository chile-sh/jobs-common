import { Model } from 'objection';
import Job from './Job';
export default class Tag extends Model {
    readonly id: number;
    name: string;
    jobs: Job[];
    static tableName: string;
    static relationMappings: () => {
        jobs: {
            relation: import("objection").Relation;
            modelClass: string;
            join: {
                from: string;
                through: {
                    from: string;
                    to: string;
                };
                to: string;
            };
        };
    };
}
