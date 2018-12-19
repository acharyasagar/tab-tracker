import root from './modules/root';
import login from './modules/login';
import register from './modules/register';
import songs from './modules/songs';

export default (app) => {
  
  // Hook up different route modules to work with the APIServer
  app.use('/', root);
  app.use('/register', register);
  app.use('/login', login);
  app.use('/songs', songs);
}
