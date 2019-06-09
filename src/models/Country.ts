import { Model } from 'objection'
import { join } from 'path'

import City from './City'

export default class Country extends Model {
  readonly id!: number
  name: string
  cities: City[]

  static tableName = 'countries'

  static relationMappings = () => ({
    country: {
      relation: Model.HasManyRelation,
      modelClass: join(__dirname, 'City'),
      join: {
        from: 'countries.id',
        to: 'cities.country_id'
      }
    }
  })
}
