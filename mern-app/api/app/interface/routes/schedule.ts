import express, { Request, Response } from 'express';
import Schedules from '../../infrastructure/repository/mongo/Schedules';
import Users from '../../infrastructure/repository/mongo/Users';

const router = express.Router();

const SchedulesController = () => {
  const getSchedules = async (req: Request, res: Response) => {
    const username = req?.query?.username;

    try {
      const user = await Users.findOne({ username });

      const rows = username && user?._id ? await Schedules.find({ userId: user._id}) : await Schedules.find({});

      const data = {
        uptime: process.uptime(),
        message: 'Ok',
        data: rows,
        date: new Date()
      };
  
      return res.status(200).send(data);
    } catch (err: any) {
      const data = {
        uptime: process.uptime(),
        message: 'Error',
        error: err.message,
        date: new Date()
      };
  
      res.status(400).send(data);
    }
  }

  const create = async (req: Request, res: Response) => {
    const username = req?.body?.username;
    const scheduleDate = req?.body?.scheduleDate;
    const description = req?.body?.description;

    try {
      const user = await Users.findOne({ username });

      if (!user?._id) throw new Error("Username not found");

      const newSchedule = new Schedules({
        userId: user?._id,
        scheduleDate,
        description
      });

      const newData = await newSchedule.save();

      const data = {
        uptime: process.uptime(),
        message: 'Ok',
        data: newData,
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

  const update = async (req: Request, res: Response) => {
    const username = req?.body?.username;
    const scheduleId = req?.body?.scheduleId;
    const scheduleDate = req?.body?.scheduleDate;
    const description = req?.body?.description;

    try {
      const user = await Users.findOne({ username });

      if (!user?._id) throw new Error("Username not found");

      const payload: any = {};
      if (scheduleDate) payload.scheduleDate = scheduleDate;
      if (description) payload.scheduleDate = description;
      

      const updated = await Schedules.findOneAndUpdate(
        { _id: scheduleId },
        {
          $set: payload
        },
        { new: true }
      )

      const data = {
        uptime: process.uptime(),
        message: 'Ok',
        data: updated,
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

  const deleteSchedule = async (req: Request, res: Response) => {
    const username = req?.body?.username;
    const scheduleId = req?.body?.scheduleId;

    try {
      const user = await Users.findOne({ username });

      if (!user?._id) throw new Error("Username not found");

      const deleted = await Schedules.deleteOne(
        { _id: scheduleId }
      )

      const data = {
        uptime: process.uptime(),
        message: 'Ok',
        data: deleted,
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

  router.get('/', getSchedules);
  router.post('/add', create);
  router.put('/update', update);
  router.delete('/delete', deleteSchedule);

  return router;
}

export default SchedulesController;
