import { createConnection, Connection, ConnectionOptions } from "typeorm";

import entities from './entities'

const entitiesArr: Array<object> = Object.keys(entities).map(entity => entities[entity]);

export default class dbManager {
  options: ConnectionOptions;
  constructor(config) {
    this.options = Object.assign({}, { entities: entitiesArr }, config.dbConnectionOptions);
  }
  async establishConnection () : Promise<Connection> {
    const connection = await createConnection(this.options);
    return connection;
  }
}

