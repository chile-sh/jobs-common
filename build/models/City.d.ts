import { Model } from 'objection';
import Country from './Country';
export default class City extends Model {
    readonly id: number;
    name: string;
    country: Country;
    static tableName: string;
    static relationMappings: () => {
        country: {
            relation: import("objection").Relation;
            modelClass: string;
            join: {
                from: string;
                to: string;
            };
        };
    };
}
