import { Model } from 'objection'
import { join } from 'path'

import Source from './Source'

export default class Snapshot extends Model {
  readonly id!: number
  processStartedAt?: Date
  processFinishedAt?: Date
  info?: string
  errors?: string
  version: number
  current: boolean

  source: Source

  static tableName = 'snapshots'

  static relationMappings = () => ({
    source: {
      relation: Model.BelongsToOneRelation,
      modelClass: join(__dirname, 'Source'),
      join: {
        from: 'snapshots.source_id',
        to: 'sources.id'
      }
    }
  })
}
