import express, { Request, Response } from 'express';
import Users from '../../infrastructure/repository/mongo/Users';

const router = express.Router();

const UsersCheckController = () => {
  const getUsers = async (req: Request, res: Response) => {
    try {
      const rows = await Users.find({});
      const data = {
        uptime: process.uptime(),
        message: 'Ok',
        data: rows,
        date: new Date()
      };

      return res.status(200).send(data);
    } catch (err) {
      const errorData = {
        uptime: process.uptime(),
        message: 'Ok',
        error: err,
        date: new Date()
      };

      return res.status(400).send(errorData);
    }
  }

  router.get('/', getUsers);

  return router;
}

export default UsersCheckController;
