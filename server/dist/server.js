"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ApiServer_1 = __importDefault(require("./ApiServer"));
const config_1 = __importDefault(require("./config"));
const routes_1 = __importDefault(require("./routes"));
const app = express_1.default();
const server = new ApiServer_1.default(app, config_1.default);
// Start Api Server 
server.start();
// Hook controllers up with the Api Server
routes_1.default(server.app);
