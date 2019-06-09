"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const path_1 = require("path");
class Tag extends objection_1.Model {
}
Tag.tableName = 'tags';
Tag.relationMappings = () => ({
    jobs: {
        relation: objection_1.Model.ManyToManyRelation,
        modelClass: path_1.join(__dirname, 'Job'),
        join: {
            from: 'tags.id',
            through: {
                from: 'jobs_tags.job_id',
                to: 'jobs_tags.tag_id'
            },
            to: 'jobs.id'
        }
    }
});
exports.default = Tag;
//# sourceMappingURL=Tag.js.map