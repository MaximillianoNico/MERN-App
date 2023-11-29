import Users from "../Users";
import Blog from "../Blog";

import blog from './blog.json';

export const InitSeeder = async () => {
  try {
    const users = await Users.find({});
    const blogContent = await Blog.find({});

    if (!users.length) {
      const newUser = new Users({
        username: "user-1",
        age: 24,
        email: "user-1@gmail.com"
      });
  
      await newUser.save();
    }

    if (!blogContent.length) {
      await Blog.insertMany(blog);
    }
  } catch (err) {
    console.log('error init seeder: ', err)
  }
}