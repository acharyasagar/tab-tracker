import express from 'express';

import ApiServer from './ApiServer';
import config from './config';
import routes from './routes'

const app: express.Application = express();

const server = new ApiServer(app, config);

// Start Api Server 

server.start();

// Hook controllers up with the Api Server

routes(server.app);