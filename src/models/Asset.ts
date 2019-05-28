import { Model } from 'objection'

import { SCHEMA_JOIN as SCHEMA } from '../constants'

export default class Asset extends Model {
  readonly id!: number
  filename: string
  mimetype: string
  path: string

  static tableName = SCHEMA.assets.__tableName
}
