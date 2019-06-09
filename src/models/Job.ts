import { Model } from 'objection'
import { join } from 'path'

import Company from './Company'
import Category from './Category'
import Tag from './Tag'
import City from './City'
import Source from './Source'

export default class Job extends Model {
  readonly id!: number
  title: string
  slug: string
  level?: string
  type: string
  isClosed?: boolean
  salaryFrom?: number
  salaryTo?: number
  salaryFromMap?: boolean
  salariesHistory?: { date: Date; range: [number, number] }[] | string
  publishedAt: Date
  description: string
  meta?: {} | string
  version: number

  company: Company
  category: Category
  tags?: Tag[]
  city?: City
  source: Source

  static tableName = 'jobs'

  static relationMappings = () => ({
    source: {
      relation: Model.BelongsToOneRelation,
      modelClass: join(__dirname, 'Source'),
      join: {
        from: 'jobs.source_id',
        to: 'sources.id'
      }
    },

    city: {
      relation: Model.BelongsToOneRelation,
      modelClass: join(__dirname, 'City'),
      join: {
        from: 'jobs.city_id',
        to: 'cities.id'
      }
    },

    company: {
      relation: Model.BelongsToOneRelation,
      modelClass: join(__dirname, 'Company'),
      join: {
        from: 'jobs.company_id',
        to: 'companies.id'
      }
    },

    tags: {
      relation: Model.ManyToManyRelation,
      modelClass: join(__dirname, 'Tag'),
      join: {
        from: 'jobs.id',
        through: {
          from: 'jobs_tags.job_id',
          to: 'jobs_tags.tag_id'
        },
        to: 'tags.id'
      }
    },

    category: {
      relation: Model.BelongsToOneRelation,
      modelClass: join(__dirname, 'Category'),
      join: {
        from: 'jobs.category_id',
        to: 'categories.id'
      }
    }
  })
}
