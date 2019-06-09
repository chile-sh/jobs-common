import { Model } from 'objection'
import { join } from 'path'

import Country from './Country'

export default class City extends Model {
  readonly id!: number
  name: string
  country: Country

  static tableName = 'cities'

  static relationMappings = () => ({
    country: {
      relation: Model.BelongsToOneRelation,
      modelClass: join(__dirname, 'Country'),
      join: {
        from: 'cities.country_id',
        to: 'countries.id'
      }
    }
  })
}
