import { Model } from 'objection'
import { join } from 'path'

import Job from './Job'

export default class Tag extends Model {
  readonly id!: number
  name: string
  jobs: Job[]

  static tableName = 'tags'

  static relationMappings = () => ({
    jobs: {
      relation: Model.ManyToManyRelation,
      modelClass: join(__dirname, 'Job'),
      join: {
        from: 'tags.id',
        through: {
          from: 'jobs_tags.job_id',
          to: 'jobs_tags.tag_id'
        },
        to: 'jobs.id'
      }
    }
  })
}
