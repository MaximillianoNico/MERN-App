import mongoose from 'mongoose';
import { InitSeeder } from './Seeders';

const DatabaseName = process.env.MONGO_INITDB_DATABASE_NAME ?? 'fastco-db-nosql';

const initialize = async () => {
  const DatabaseURL = process.env.MONGO_URL ?? `mongodb://localhost:27017`;

  console.log('Initialize Database: ', DatabaseName, DatabaseURL)

  try {
    await mongoose.connect(
      DatabaseURL,
      { dbName: DatabaseName }
    )

    await InitSeeder();
    console.log('Success connect to ', DatabaseURL)
  } catch (err) {
    if (err) {
      console.log('Connection Failed to ', DatabaseURL, err)

      return;
    }
  }
}

export default {
  initialize
}
