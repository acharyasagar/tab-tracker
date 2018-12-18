"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const root_1 = __importDefault(require("./modules/root"));
exports.default = (app) => {
    app.use(body_parser_1.default.json());
    app.use(cors_1.default());
    app.use('/', root_1.default);
};
