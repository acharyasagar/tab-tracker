"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiServer {
    constructor(app, config) {
        this.app = app;
        this.port = config.port;
    }
    start() {
        this.app.listen(this.port, () => {
            console.log();
            console.log(`\n Api server started at port ${this.port}`);
        });
    }
}
exports.default = ApiServer;
