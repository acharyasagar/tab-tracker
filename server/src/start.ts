import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import bodyParser from 'body-parser';

import apiServer from './api-server';
import dbManager from './db-manager';
import config from './config';
import routes from './routes';
import shouldCompress from './middlewares/should-compress'

// Api server instance
const server = new apiServer(config);

// Dabatase instance
const database = new dbManager(config);
database.establishConnection()
  .then(connection => {
    console.log('\n Database Connection established successfully.\n');

    // Start server and perform basic configurations
    server.start()
      .then(app => {
        // Configure middlewares required for all routes
        app.use(helmet());
        app.use(compression({filter: shouldCompress}));
        app.use(bodyParser.json());
        app.use(cors());

        // Hook controllers up with the Api Server
        routes(app);
      })
      .catch((err: Error) => {
        console.error(err);
      });
  })
  .catch((err: Error) => {
    console.error('\n Error connecting to the database.\n');
  })
