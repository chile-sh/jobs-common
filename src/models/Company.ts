import { Model } from 'objection'
import { join } from 'path'

import Job from './Job'
import Asset from './Asset'

export default class Company extends Model {
  readonly id!: number
  name: string
  slug: string
  shortDescription?: string
  description?: string
  meta?: {}
  logo?: number

  logoAsset?: Asset
  jobs?: Job[]

  static tableName = 'companies'

  static relationMappings = () => ({
    logoAsset: {
      relation: Model.HasOneRelation,
      modelClass: join(__dirname, 'Asset'),
      join: {
        from: 'companies.logo',
        to: 'assets.id'
      }
    },
    jobs: {
      relation: Model.HasManyRelation,
      modelClass: join(__dirname, 'Job'),
      join: {
        from: 'companies.id',
        to: 'jobs.company_id'
      }
    }
  })
}
