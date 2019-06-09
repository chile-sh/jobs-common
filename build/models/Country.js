"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const path_1 = require("path");
class Country extends objection_1.Model {
}
Country.tableName = 'countries';
Country.relationMappings = () => ({
    country: {
        relation: objection_1.Model.HasManyRelation,
        modelClass: path_1.join(__dirname, 'City'),
        join: {
            from: 'countries.id',
            to: 'cities.country_id'
        }
    }
});
exports.default = Country;
//# sourceMappingURL=Country.js.map