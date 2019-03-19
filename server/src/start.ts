import bodyParser from 'body-parser'
import compression from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import 'reflect-metadata'

import apiServer from './api-server'
import config from './config'
import DbManager from './db-manager'
import shouldCompress from './middlewares/should-compress'
import routes from './routes'

// Api server instance
const server = new apiServer(config)

// Dabatase instance
const database = new DbManager(config)

// Establishes connecction and starts the api server
database.establishConnection()
  .then(connection => {
    // tslint:disable-next-line:no-console
    console.log('\n Database Connection established successfully.\n')

    // Start server and perform basic configurations
    server.start()
      .then(app => {
        // Configure middlewares required for all routes
        app.use(helmet())
        app.use(compression({filter: shouldCompress}))
        app.use(bodyParser.json())
        app.use(cors())

        // Hook controllers up with the Api Server
        routes(app)
      })
      .catch((err: Error) => {
        // tslint:disable-next-line:no-console
        console.error(err)
      })
  })
  .catch((err: Error) => {
    // tslint:disable-next-line:no-console
    console.error('\n Error connecting to the database.\n')
  })
