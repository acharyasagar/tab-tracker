import express from 'express';

export default class ApiServer {
  private port: number;
  constructor (config) {
    this.port = config.port;
  }
  start (): Promise<any> {
    const app = express();
    return new Promise((resolve, reject) => {
      try {
        app.listen(8081, () => {
          console.log('\n Server Started at port 8081 \n');
        });
        resolve(app);
      } catch (err) {
        reject(err);
      }
    })
  }
}