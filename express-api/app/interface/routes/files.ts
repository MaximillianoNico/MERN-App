import express, { Request, Response } from 'express';
import Users from '../../infrastructure/repository/mongo/Users';
import Files from "../../infrastructure/repository/mongo/Files";
import uploader from '../../common/uploader';

const router = express.Router();

const FilesController = () => {
  const uploadFile = async (req: Request, res: Response) => {
    try {
      const username = req?.body?.username;
      const filepath = req?.file?.path;

      const user = await Users.findOne({ username });

      const newFileUploaded = new Files({
        filepath,
        userId: user?._id
      });

      await newFileUploaded.save();

      const data = {
        uptime: process.uptime(),
        message: 'Success',
        date: new Date()
      };
  
      return res.status(200).send(data);
    
    } catch (err) {
      const data = {
        uptime: process.uptime(),
        message: 'Error',
        error: err,
        date: new Date()
      };
      
      return res.status(400).send(data);
    }
  };

  const getFiles = async (req: Request, res: Response) => {
    try {
      const username = req?.query?.username;
      const row = await Users.findOne({ username })

      if (!row?._id) throw new Error("username is required");

      const rows = await Files.find({ userId: row._id }).exec();

      const data = {
        uptime: process.uptime(),
        message: 'Success',
        date: new Date(),
        data: rows
      };
  
      return res.status(200).send(data);
    } catch (err) {
      const data = {
        uptime: process.uptime(),
        message: 'Error',
        error: err,
        date: new Date()
      };
      
      return res.status(400).send(data);
    }
  };

  router.get('/', getFiles);
  router.post('/add-file', uploader.upload.single("file"), uploadFile);

  return router;
}

export default FilesController;
