export default class ApiServer {
  app: any;
  port: number;
  constructor (app, config) {
    this.app = app;
    this.port = config.port;
  }

  start () {
    this.app.listen(this.port, () => {
      console.log();
      console.log(`\n Api server started at port ${this.port}`)
    })
  }
}