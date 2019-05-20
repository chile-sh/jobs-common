"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const path_1 = require("path");
const constants_1 = require("../constants");
class Company extends objection_1.Model {
}
Company.tableName = constants_1.SCHEMA_JOIN.companies.__tableName;
Company.relationMappings = () => ({
    jobs: {
        relation: objection_1.Model.HasManyRelation,
        modelClass: path_1.join(__dirname, 'Job'),
        join: {
            from: constants_1.SCHEMA_JOIN.companies.id,
            to: constants_1.SCHEMA_JOIN.jobs.companyId
        }
    }
});
exports.default = Company;
//# sourceMappingURL=Company.js.map