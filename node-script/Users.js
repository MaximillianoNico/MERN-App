const mongoose = require('mongoose');

// Define schema
const Schema = mongoose.Schema

const tbl_users = new Schema({
  username: {
    type: String
  },
  age: {
    type: String
  },
  email: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Compile model from schema
const Users = mongoose.model("tbl_users", tbl_users);

module.exports= Users;
