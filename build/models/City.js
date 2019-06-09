"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const path_1 = require("path");
class City extends objection_1.Model {
}
City.tableName = 'cities';
City.relationMappings = () => ({
    country: {
        relation: objection_1.Model.BelongsToOneRelation,
        modelClass: path_1.join(__dirname, 'Country'),
        join: {
            from: 'cities.country_id',
            to: 'countries.id'
        }
    }
});
exports.default = City;
//# sourceMappingURL=City.js.map