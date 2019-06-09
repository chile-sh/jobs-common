"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const path_1 = require("path");
class Snapshot extends objection_1.Model {
}
Snapshot.tableName = 'snapshots';
Snapshot.relationMappings = () => ({
    source: {
        relation: objection_1.Model.BelongsToOneRelation,
        modelClass: path_1.join(__dirname, 'Source'),
        join: {
            from: 'snapshots.source_id',
            to: 'sources.id'
        }
    }
});
exports.default = Snapshot;
//# sourceMappingURL=Snapshot.js.map