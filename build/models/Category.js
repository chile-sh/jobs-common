"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const path_1 = require("path");
class Category extends objection_1.Model {
}
Category.tableName = 'categories';
Category.relationMappings = () => ({
    jobs: {
        relation: objection_1.Model.HasManyRelation,
        modelClass: path_1.join(__dirname, 'Job'),
        join: {
            from: 'categories.id',
            to: 'jobs.category_id'
        }
    }
});
exports.default = Category;
//# sourceMappingURL=Category.js.map