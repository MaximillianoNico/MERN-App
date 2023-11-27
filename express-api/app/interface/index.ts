import healthCheck from './routes/healthcheck';
import users from './routes/users';
import files from './routes/files';
import { IMainRoute } from './types'

const Interface = ({ app }: IMainRoute) => {

  app.use('/app', healthCheck());
  app.use('/api/users', users());
  app.use('/api/files', files());

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
