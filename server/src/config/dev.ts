import { IConfig } from '../types/config';

const config:IConfig = {
  port: 8081,
  dbConnectionOptions: {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'tabtracker',
    username: 'tabtracker',
    password: 'tabtracker',
    synchronize: true
  },
  authentication: {
    jwtSecret: 'd3v-s3cr3t-k3y',
    jwtOptions: {
      expiresIn: '2 days'
    }
  }
}

export = config;
