import mongoose from 'mongoose';

// Define schema
const Schema = mongoose.Schema

const tbl_files = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Users'
  },
  filepath: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Compile model from schema
const Files = mongoose.model("tbl_files", tbl_files);

export default Files;
