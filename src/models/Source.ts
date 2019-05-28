import { Model } from 'objection'
import { join } from 'path'

import { SCHEMA_JOIN as SCHEMA } from '../constants'

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

  static tableName = SCHEMA.sources.__tableName

  static relationMappings = () => ({
    jobs: {
      relation: Model.HasManyRelation,
      modelClass: join(__dirname, 'Job'),
      join: {
        from: SCHEMA.sources.id,
        to: SCHEMA.jobs.sourceId
      }
    },
    snapshots: {
      relation: Model.HasManyRelation,
      modelClass: join(__dirname, 'Snapshot'),
      join: {
        from: SCHEMA.sources.id,
        to: SCHEMA.snapshots.sourceId
      }
    }
  })
}
