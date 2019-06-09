import { Model } from 'objection'
import { join } from 'path'

import Job from './Job'

export default class Category extends Model {
  readonly id!: number
  name: string
  slug: string

  jobs?: Job[]

  static tableName = 'categories'

  static relationMappings = () => ({
    jobs: {
      relation: Model.HasManyRelation,
      modelClass: join(__dirname, 'Job'),
      join: {
        from: 'categories.id',
        to: 'jobs.category_id'
      }
    }
  })
}
