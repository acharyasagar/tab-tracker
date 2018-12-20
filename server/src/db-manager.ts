import { createConnection, Connection, ConnectionOptions } from "typeorm";

import entities from './entities'

export default class dbManager {
  options: ConnectionOptions;
  constructor(config) {
    this.options = Object.assign(entities, config.dbConnectionOptions);
  }
  async establishConnection () : Promise<Connection> {
    const connection = await createConnection(this.options);
    return connection;
  }
}

