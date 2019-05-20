"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const path_1 = require("path");
const constants_1 = require("../constants");
class Job extends objection_1.Model {
}
Job.tableName = constants_1.SCHEMA_JOIN.jobs.__tableName;
Job.relationMappings = () => ({
    city: {
        relation: objection_1.Model.BelongsToOneRelation,
        modelClass: path_1.join(__dirname, 'City'),
        join: {
            from: constants_1.SCHEMA_JOIN.jobs.cityId,
            to: constants_1.SCHEMA_JOIN.cities.id
        }
    },
    company: {
        relation: objection_1.Model.BelongsToOneRelation,
        modelClass: path_1.join(__dirname, 'Company'),
        join: {
            from: constants_1.SCHEMA_JOIN.jobs.companyId,
            to: constants_1.SCHEMA_JOIN.companies.id
        }
    },
    tags: {
        relation: objection_1.Model.ManyToManyRelation,
        modelClass: path_1.join(__dirname, 'Tag'),
        join: {
            from: constants_1.SCHEMA_JOIN.jobs.id,
            through: {
                from: constants_1.SCHEMA_JOIN.jobsTags.jobId,
                to: constants_1.SCHEMA_JOIN.jobsTags.tagId
            },
            to: constants_1.SCHEMA_JOIN.tags.id
        }
    },
    category: {
        relation: objection_1.Model.BelongsToOneRelation,
        modelClass: path_1.join(__dirname, 'Category'),
        join: {
            from: constants_1.SCHEMA_JOIN.jobs.categoryId,
            to: constants_1.SCHEMA_JOIN.categories.id
        }
    }
});
exports.default = Job;
//# sourceMappingURL=Job.js.map