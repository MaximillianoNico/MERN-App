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
  }

  router.post('/add-file', uploader.upload.single("files"), uploadFile);

  return router;
}

export default FilesController;
