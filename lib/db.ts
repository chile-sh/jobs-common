import Knex from 'knex'
import { knexSnakeCaseMappers, Model, ModelClass } from 'objection'

import config from '../config'
import * as knexConfig from '../knexfile'

const knex = Knex({
  ...knexConfig[config.env],
  ...knexSnakeCaseMappers()
})

Model.knex(knex)

export const upsert = (
  table: string,
  object: any,
  constraint: string | string[]
) => {
  const insert = knex(table).insert(object)
  const update = knex.queryBuilder().update(object)
  const constraintStr =
    typeof constraint === 'string' ? constraint : `(${constraint.join(',')})`

  return knex
    .raw(`? ON CONFLICT ${constraintStr} DO ? returning *`, [insert, update])
    .get('rows')
    .get(0)
}

export const first = async (model: ModelClass<any>, where: any) =>
  model
    .query()
    .first()
    .where(where)

export default knex
