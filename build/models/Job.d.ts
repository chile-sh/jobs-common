import { Model } from 'objection';
import Company from './Company';
import Category from './Category';
import Tag from './Tag';
import City from './City';
export default class Job extends Model {
    readonly id: number;
    title: string;
    slug: string;
    level?: string;
    type: string;
    salaryFrom?: number;
    salaryTo?: number;
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
    city: City;
    static tableName: string;
    static relationMappings: () => {
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
