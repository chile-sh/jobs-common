import * as Knex from 'knex'
import { SCHEMA_JOIN, SOURCES } from '../constants'

export async function seed(knex: Knex): Promise<any> {
  const table = SCHEMA_JOIN.sources.__tableName
  await knex(table).del()
  return knex(table).insert([SOURCES.getonbrd])
}
