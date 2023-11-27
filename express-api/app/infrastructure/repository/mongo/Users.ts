import mongoose from 'mongoose';

// Define schema
const Schema = mongoose.Schema

const tbl_users = new Schema({
  username: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  address: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Compile model from schema
const Users = mongoose.model("tbl_users", tbl_users);

export default Users;
