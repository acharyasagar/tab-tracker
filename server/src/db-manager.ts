import { createConnection, Connection, ConnectionOptions } from "typeorm";

export default class dbManager {
  options: ConnectionOptions;
  constructor(config) {
    this.options = config.dbConnectionOptions;
  }
  async establishConnection () : Promise<Connection> {
    const connection = await createConnection(this.options);
    return connection;
  }
}

