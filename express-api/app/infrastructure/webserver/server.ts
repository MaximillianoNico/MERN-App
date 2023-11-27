import express from 'express';
import cors from 'cors'
import path from 'path';
import Interface from '../../interface';
import NoSQL from '../repository/mongo';
import Seeder from '../repository/mongo/Seeder';

const createServer = () => {
  const app = express()
  const API_PORT = process.env.PORT || process.env.NX_API_PORT;

  // Initialize Mongoose
  NoSQL.initialize();
  Seeder.InitUsersData();

  app.use(cors());
  app.use(express.json());

  app.use(
    '/assets',
    express.static(
      path.join(__dirname, '../../../uploads/files')
    )
  )

  // Init SocketIO
  // const { io, server } = Socket.createClient({ app });
  Interface({ app })

  app.listen(API_PORT || 3000, () => {
    console.log(`Server listen on port ${API_PORT} server-time ${new Date().getHours()}:${new Date().getMinutes()}`);
  });

  return app;

}

export default { createServer }
