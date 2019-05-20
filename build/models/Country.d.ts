import { Model } from 'objection';
import City from './City';
export default class Country extends Model {
    readonly id: number;
    name: string;
    cities: City[];
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
