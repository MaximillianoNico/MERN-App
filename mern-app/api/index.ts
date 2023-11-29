import APIBootstrap from './app/infrastructure/webserver/server';
import dotenv from 'dotenv';

interface IUser {
  username: string
  age?: number | string
  email: string
}

declare global {
  namespace Express {
    interface Request {
      user: IUser
    }
  }
}

dotenv.config();

const start = () => {
  try {
    APIBootstrap.createServer();

  } catch (err) {

    console.log(err);
    process.exit(1);
  }
}

start();
