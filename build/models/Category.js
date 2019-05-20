"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const path_1 = require("path");
const constants_1 = require("../constants");
class Category extends objection_1.Model {
}
Category.tableName = constants_1.SCHEMA_JOIN.categories.__tableName;
Category.relationMappings = () => ({
    jobs: {
        relation: objection_1.Model.HasManyRelation,
        modelClass: path_1.join(__dirname, 'Job'),
        join: {
            from: constants_1.SCHEMA_JOIN.categories.id,
            to: constants_1.SCHEMA_JOIN.jobs.categoryId
        }
    }
});
exports.default = Category;
//# sourceMappingURL=Category.js.map