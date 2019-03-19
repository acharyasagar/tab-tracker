import { Connection, ConnectionOptions, createConnection } from 'typeorm'

import entities from './entities'

const entitiesArr: object[] = Object.keys(entities).map(entity => entities[entity])

export default class DbManager {
  public options: ConnectionOptions
  constructor(config) {
    this.options = Object.assign({}, { entities: entitiesArr }, config.dbConnectionOptions)
  }
  public async establishConnection(): Promise<Connection> {
    const connection = await createConnection(this.options)
    return connection
  }
}
