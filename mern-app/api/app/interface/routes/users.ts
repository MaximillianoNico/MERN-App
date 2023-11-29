import express, { Request, Response } from 'express';
import Schedules from '../../infrastructure/repository/mongo/Schedules';
import Users from '../../infrastructure/repository/mongo/Users';

const router = express.Router();
const SchedulesController = () => {
  const getUsers = async (_: Request, res: Response) => {
    try {
      const users = await Users.find({ });

      const data = {
        uptime: process.uptime(),
        message: 'Ok',
        data: users,
        date: new Date()
      };
  
      return res.status(200).send(data);
    } catch (err: any) {
      const data = {
        uptime: process.uptime(),
        message: 'Error',
        error: err?.message,
        date: new Date()
      };
  
      return res.status(400).send(data);
    }
  }

  const create = async (req: Request, res: Response) => {
    try {
      const payload = {
        username: req?.body?.username,
        age: req?.body?.age,
        email: req?.body?.email
      }

      if (!payload.email) throw new Error("Email is required");
      if (!payload.username) throw new Error("Username is required");
      
      const newUser = new Users(payload);
      const newRow = await newUser.save();

      const data = {
        uptime: process.uptime(),
        message: 'Error',
        data: newRow,
        date: new Date()
      };
  
      return res.status(400).send(data);
    } catch (err) {
      const data = {
        uptime: process.uptime(),
        message: 'Error',
        error: err,
        date: new Date()
      };
  
      return res.status(400).send(data);
    }
  }


  router.get('/', getUsers);
  router.post('/create', create);

  return router;
}

export default SchedulesController;
