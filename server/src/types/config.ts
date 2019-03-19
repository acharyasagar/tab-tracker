export interface IConfig {
  port: number
  dbConnectionOptions: {
    type: string;
    host: string;
    port: number,
    database: string;
    username: string;
    password: string;
    synchronize: boolean;
  }
  authentication: {
    jwtSecret: string;
    jwtOptions?: {
      expiresIn?: string | number;
    }
  }
}
