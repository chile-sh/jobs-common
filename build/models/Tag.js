"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const path_1 = require("path");
const constants_1 = require("../constants");
class Tag extends objection_1.Model {
}
Tag.tableName = constants_1.SCHEMA_JOIN.tags.__tableName;
Tag.relationMappings = () => ({
    jobs: {
        relation: objection_1.Model.ManyToManyRelation,
        modelClass: path_1.join(__dirname, 'Job'),
        join: {
            from: constants_1.SCHEMA_JOIN.tags.id,
            through: {
                from: constants_1.SCHEMA_JOIN.jobsTags.jobId,
                to: constants_1.SCHEMA_JOIN.jobsTags.tagId
            },
            to: constants_1.SCHEMA_JOIN.jobs.id
        }
    }
});
exports.default = Tag;
//# sourceMappingURL=Tag.js.map