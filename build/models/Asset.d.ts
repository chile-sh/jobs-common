import { Model } from 'objection';
export default class Asset extends Model {
    readonly id: number;
    filename: string;
    mimetype: string;
    path: string;
    static tableName: string;
}
