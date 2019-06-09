"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const path_1 = require("path");
class Company extends objection_1.Model {
}
Company.tableName = 'companies';
Company.relationMappings = () => ({
    logoAsset: {
        relation: objection_1.Model.HasOneRelation,
        modelClass: path_1.join(__dirname, 'Asset'),
        join: {
            from: 'companies.logo',
            to: 'assets.id'
        }
    },
    jobs: {
        relation: objection_1.Model.HasManyRelation,
        modelClass: path_1.join(__dirname, 'Job'),
        join: {
            from: 'companies.id',
            to: 'jobs.company_id'
        }
    }
});
exports.default = Company;
//# sourceMappingURL=Company.js.map