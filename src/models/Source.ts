import { Model } from 'objection'
import { join } from 'path'

import Job from './Job'
import Snapshot from './Snapshot'

export default class Source extends Model {
  readonly id!: number
  name: string
  slug: string
  url: string
  logo?: string

  jobs: Job[]
  snapshots: Snapshot[]

  static tableName = 'sources'

  static relationMappings = () => ({
    jobs: {
      relation: Model.HasManyRelation,
      modelClass: join(__dirname, 'Job'),
      join: {
        from: 'sources.id',
        to: 'jobs.source_id'
      }
    },
    snapshots: {
      relation: Model.HasManyRelation,
      modelClass: join(__dirname, 'Snapshot'),
      join: {
        from: 'sources.id',
        to: 'snapshots.source_id'
      }
    }
  })
}
