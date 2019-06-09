"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const path_1 = require("path");
class Source extends objection_1.Model {
}
Source.tableName = 'sources';
Source.relationMappings = () => ({
    jobs: {
        relation: objection_1.Model.HasManyRelation,
        modelClass: path_1.join(__dirname, 'Job'),
        join: {
            from: 'sources.id',
            to: 'jobs.source_id'
        }
    },
    snapshots: {
        relation: objection_1.Model.HasManyRelation,
        modelClass: path_1.join(__dirname, 'Snapshot'),
        join: {
            from: 'sources.id',
            to: 'snapshots.source_id'
        }
    }
});
exports.default = Source;
//# sourceMappingURL=Source.js.map