"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const path_1 = require("path");
const constants_1 = require("../constants");
class Country extends objection_1.Model {
}
Country.tableName = constants_1.SCHEMA_JOIN.countries.__tableName;
Country.relationMappings = () => ({
    country: {
        relation: objection_1.Model.HasManyRelation,
        modelClass: path_1.join(__dirname, 'City'),
        join: {
            from: constants_1.SCHEMA_JOIN.countries.id,
            to: constants_1.SCHEMA_JOIN.cities.countryId
        }
    }
});
exports.default = Country;
//# sourceMappingURL=Country.js.map