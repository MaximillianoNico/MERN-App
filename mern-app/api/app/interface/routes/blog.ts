import express, { Request, Response } from 'express';
import Blog from '../../infrastructure/repository/mongo/Blog';

const router = express.Router();
const BlogController = () => {
  const getBlog = async (req: Request, res: Response) => {
    const query = req?.query?.s ?? "";

    try {
      const payload = !!query ? {
        $text: {
            $search: query?.toString(),
        },
      } : {};

      const rows = await Blog.find(payload)

      const data = {
        uptime: process.uptime(),
        message: 'Ok',
        data: rows,
        date: new Date()
      };

      return res.status(200).send(data);
    } catch (err) {
      
    }
  }

  router.get('/', getBlog);

  return router;
}

export default BlogController;
