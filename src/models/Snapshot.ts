import { Model } from 'objection'
import { join } from 'path'

import Source from './Source'

import { SCHEMA_JOIN as SCHEMA } from '../constants'

export default class Snapshot extends Model {
  readonly id!: number
  processStartedAt?: Date
  processFinishedAt?: Date
  info?: string
  errors?: string
  version: number
  current: boolean

  source: Source

  static tableName = SCHEMA.snapshots.__tableName

  static relationMappings = () => ({
    source: {
      relation: Model.BelongsToOneRelation,
      modelClass: join(__dirname, 'Source'),
      join: {
        from: SCHEMA.snapshots.sourceId,
        to: SCHEMA.sources.id
      }
    }
  })
}
