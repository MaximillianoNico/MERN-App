import express, { NextFunction, Request, Response } from 'express';
import Users from '../repository/mongo/Users';

interface IUser {
  username: string
  age: number | string
  email: string
}

export interface IRequest extends Request {
  user: IUser
}

const middleware = async (req: IRequest, res: Response, next: NextFunction) => {
  const userName = req?.headers?.['x-username'];

  try { 
    const user = await Users.findOne({ username: userName });

    if (!user?._id) throw new Error("Username not found");
    
    req.user = {
      username: user.username ?? "",
      age: user.age ?? "",
      email: user.email ?? ""
    }

    next();
  } catch (err) {
    return res.status(400).send({
      status: "Forbidden",
      errors: err
    })
  }
}

export default middleware;
