import fs from "fs"
import { v4 } from 'uuid';
import multer from 'multer';
import Users from "../infrastructure/repository/mongo/Users";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const userId = req?.query?.['userId'] || '';

    const directory = `uploads/videos/${userId}`;

    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true })
    }

    cb(null, directory);
  },
  filename: (req, file, cb) => {
    const fileNames = file.originalname.split('.');
    const ext = fileNames[fileNames.length - 1];
    cb(null, `files_${v4()}_${file.fieldname}_${Date.now()}.${ext}`);
  },
});

const upload = multer({
  storage,
  fileFilter: async (req, _, cb) => {
    const username = req?.body?.username;

    try {
      const row = await Users.find({ username });

      if (!row) {
        return cb(new Error("Username not found"))
      }

      return cb(null, true)
    } catch (err) {

    }
  }
});

export default {
  upload
}