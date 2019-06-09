"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const path_1 = require("path");
class Job extends objection_1.Model {
}
Job.tableName = 'jobs';
Job.relationMappings = () => ({
    source: {
        relation: objection_1.Model.BelongsToOneRelation,
        modelClass: path_1.join(__dirname, 'Source'),
        join: {
            from: 'jobs.source_id',
            to: 'sources.id'
        }
    },
    city: {
        relation: objection_1.Model.BelongsToOneRelation,
        modelClass: path_1.join(__dirname, 'City'),
        join: {
            from: 'jobs.city_id',
            to: 'cities.id'
        }
    },
    company: {
        relation: objection_1.Model.BelongsToOneRelation,
        modelClass: path_1.join(__dirname, 'Company'),
        join: {
            from: 'jobs.company_id',
            to: 'companies.id'
        }
    },
    tags: {
        relation: objection_1.Model.ManyToManyRelation,
        modelClass: path_1.join(__dirname, 'Tag'),
        join: {
            from: 'jobs.id',
            through: {
                from: 'jobs_tags.job_id',
                to: 'jobs_tags.tag_id'
            },
            to: 'tags.id'
        }
    },
    category: {
        relation: objection_1.Model.BelongsToOneRelation,
        modelClass: path_1.join(__dirname, 'Category'),
        join: {
            from: 'jobs.category_id',
            to: 'categories.id'
        }
    }
});
exports.default = Job;
//# sourceMappingURL=Job.js.map