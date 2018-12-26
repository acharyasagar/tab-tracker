interface IDbConnectionOptions {
  type: string;
  host: string;
  port: Number,
  database: string;
  username: string;
  password: string;
  synchronize: boolean;
}
interface IAuthentication {
  jwtSecret: string;
}
interface IConfig {
  port: Number;
  dbConnectionOptions: IDbConnectionOptions;
  authentication: IAuthentication;
}

const config:IConfig =  {
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
    jwtSecret: 'd3v-s3cr3t-k3y'
  }
}

export = config;
