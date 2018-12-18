import cors from 'cors';
import bodyParser from 'body-parser';
import root from './modules/root'

export default (app) => {
  // Middlewares to be used in every routes 
  app.use(bodyParser.json())
  app.use(cors())

  // Hook up different route modules to work with the APIServer
  app.use('/', root)
}
