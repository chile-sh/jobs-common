import * as Knex from 'knex'

import { SOURCES } from '../constants'

export async function seed(knex: Knex): Promise<any> {
  await knex('sources').del()
  return knex('sources').insert([SOURCES.getonbrd])
}
