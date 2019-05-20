"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const objection_1 = require("objection");
const config_1 = __importDefault(require("../config"));
const knexConfig = __importStar(require("../knexfile"));
const knex = knex_1.default({
    ...knexConfig[config_1.default.env],
    ...objection_1.knexSnakeCaseMappers()
});
objection_1.Model.knex(knex);
exports.upsert = (table, object, constraint) => {
    const insert = knex(table).insert(object);
    const update = knex.queryBuilder().update(object);
    const constraintStr = typeof constraint === 'string' ? constraint : `(${constraint.join(',')})`;
    return knex
        .raw(`? ON CONFLICT ${constraintStr} DO ? returning *`, [insert, update])
        .get('rows')
        .get(0);
};
exports.first = async (model, where) => model
    .query()
    .first()
    .where(where);
exports.default = knex;
//# sourceMappingURL=db.js.map