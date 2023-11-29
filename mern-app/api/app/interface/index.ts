import healthCheck from './routes/healthcheck';
import schedules from './routes/schedule';
import users from './routes/users';
import blog from './routes/blog';
import { IMainRoute } from './types'

const Interface = ({ app }: IMainRoute) => {

  app.use('/app', healthCheck());
  app.use('/api/schedules', schedules());
  app.use('/api/users', users());
  app.use('/api/blog', blog());

  /**
   * Catch 404 and forward to error handle.
   */
  app.use((req, res, next) => {
    let err = {
      message: new Error('Not Found'),
      status: 404
    }
    
    next(err);
  });
}

export default Interface;
