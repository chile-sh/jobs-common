"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
async function seed(knex) {
    await knex('sources').del();
    return knex('sources').insert([constants_1.SOURCES.getonbrd]);
}
exports.seed = seed;
//# sourceMappingURL=init_getonbrd.js.map