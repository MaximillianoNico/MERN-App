import Users from '../Users';
import SeederData from './data-seeder.json';

const InitUsersData = async () => {
  try {
    const rows = await Users.find();
    const hasData = rows.length;

    if (!hasData) {
      const newUsersRow = await Users.insertMany(SeederData);
      if (newUsersRow) {
        console.log('Success Init Data Users')
      }
    }
  } catch (err) {
    console.error("Failed Init Data Users: ", err);
  }
}

export default {
  InitUsersData
}