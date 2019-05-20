"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const path_1 = require("path");
const constants_1 = require("../constants");
class City extends objection_1.Model {
}
City.tableName = constants_1.SCHEMA_JOIN.cities.__tableName;
City.relationMappings = () => ({
    country: {
        relation: objection_1.Model.BelongsToOneRelation,
        modelClass: path_1.join(__dirname, 'Country'),
        join: {
            from: constants_1.SCHEMA_JOIN.cities.countryId,
            to: constants_1.SCHEMA_JOIN.countries.id
        }
    }
});
exports.default = City;
//# sourceMappingURL=City.js.map