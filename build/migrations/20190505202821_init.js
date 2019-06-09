"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const relate = (table) => (name, ref, inTable, nullable = false) => {
    const _table = table
        .integer(name)
        .references(ref)
        .inTable(inTable);
    if (!nullable)
        _table.notNullable();
    return _table;
};
const dropCascade = (knex, table) => knex.raw(`DROP TABLE ${table} CASCADE`);
async function up(knex) {
    await knex.schema.createTable('countries', table => {
        table.increments('id');
        table.string('name').unique();
    });
    await knex.schema.createTable('cities', table => {
        table.increments('id');
        table.string('name');
        relate(table)('country_id', 'id', 'countries');
        table.unique(['country_id', 'name']);
    });
    await knex.schema.createTable('assets', table => {
        table.increments('id');
        table.string('filename');
        table.string('mimetype');
        table.string('path').unique();
        table.timestamps(true, true);
    });
    await knex.schema.createTable('sources', table => {
        table.increments('id');
        relate(table)('logo', 'id', 'assets', true);
        table.string('name').unique();
        table.string('slug').unique();
        table.string('url').unique();
    });
    await knex.schema.createTable('snapshots', table => {
        table.increments('id');
        relate(table)('source_id', 'id', 'sources');
        table.dateTime('process_started_at');
        table.dateTime('process_finished_at');
        table.json('info');
        table.json('errors');
        table.integer('version');
        table.boolean('current');
        table.timestamps(true, true);
    });
    await knex.schema.createTable('companies', table => {
        table.increments('id');
        relate(table)('logo', 'id', 'assets', true);
        table.string('name').index();
        table.string('slug').unique();
        table.text('short_description');
        table.text('description');
        table.json('meta');
        table.timestamps(true, true);
    });
    await knex.schema.createTable('categories', table => {
        table.increments('id');
        table.string('name');
        table.string('slug');
        table.timestamps(true, true);
    });
    await knex.schema.createTable('jobs', table => {
        table.increments('id');
        relate(table)('company_id', 'id', 'companies');
        relate(table)('city_id', 'id', 'cities', true);
        relate(table)('category_id', 'id', 'categories');
        relate(table)('source_id', 'id', 'sources');
        table.string('title').index();
        table.string('slug').unique();
        table.string('level').index();
        table.string('type').index();
        table.string('source_id').index();
        table.boolean('is_closed');
        table.boolean('salary_from_map');
        table.bigInteger('salary_from');
        table.bigInteger('salary_to');
        table.json('salaries_history');
        table.date('published_at');
        table.text('description');
        table.json('meta');
        table.integer('version');
        table.timestamps(true, true);
    });
    await knex.schema.createTable('tags', table => {
        table.increments('id');
        table.string('name').unique();
    });
    await knex.schema.createTable('jobs_tags', table => {
        table.increments('id');
        relate(table)('job_id', 'id', 'jobs');
        relate(table)('tag_id', 'id', 'tags');
    });
}
exports.up = up;
async function down(knex) {
    await dropCascade(knex, 'jobs_tags');
    await dropCascade(knex, 'tags');
    await dropCascade(knex, 'snapshots');
    await dropCascade(knex, 'jobs');
    await dropCascade(knex, 'companies');
    await dropCascade(knex, 'categories');
    await dropCascade(knex, 'countries');
    await dropCascade(knex, 'cities');
    await dropCascade(knex, 'sources');
    await dropCascade(knex, 'assets');
}
exports.down = down;
//# sourceMappingURL=20190505202821_init.js.map