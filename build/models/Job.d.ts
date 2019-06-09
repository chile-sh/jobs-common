import { Model } from 'objection';
import Company from './Company';
import Category from './Category';
import Tag from './Tag';
import City from './City';
import Source from './Source';
export default class Job extends Model {
    readonly id: number;
    title: string;
    slug: string;
    level?: string;
    type: string;
    isClosed?: boolean;
    salaryFrom?: number;
    salaryTo?: number;
    salaryFromMap?: boolean;
    salariesHistory?: {
        date: Date;
        range: [number, number];
    }[] | string;
    publishedAt: Date;
    description: string;
    meta?: {} | string;
    version: number;
    company: Company;
    category: Category;
    tags?: Tag[];
    city?: City;
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
        city: {
            relation: import("objection").Relation;
            modelClass: string;
            join: {
                from: string;
                to: string;
            };
        };
        company: {
            relation: import("objection").Relation;
            modelClass: string;
            join: {
                from: string;
                to: string;
            };
        };
        tags: {
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
        category: {
            relation: import("objection").Relation;
            modelClass: string;
            join: {
                from: string;
                to: string;
            };
        };
    };
}
