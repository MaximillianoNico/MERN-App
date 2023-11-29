import Users from "../Users";

export const InitSeeder = async () => {
  try {
    const users = await Users.find({});

    console.log('Users Data: ', users);
    if (!users.length) {
      const newUser = new Users({
        username: "user-1",
        age: 24,
        email: "user-1@gmail.com"
      });
  
      await newUser.save();
    }
  } catch (err) {
    console.log('error init seeder: ', err)
  }
}