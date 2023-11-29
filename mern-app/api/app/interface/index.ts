import healthCheck from './routes/healthcheck';
import schedules from './routes/schedule';
import users from './routes/users';
import eligibleMiddleware from '../infrastructure/middleware/eligible-access-middleware';
import { IMainRoute } from './types'

const Interface = ({ app }: IMainRoute) => {

  app.use('/app', healthCheck());
  app.use('/api/schedules', schedules());
  app.use('/api/users', users());

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
