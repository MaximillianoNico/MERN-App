import mongoose from 'mongoose';

// Define schema
const Schema = mongoose.Schema

const tbl_schedule = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, ref: 'tbl_users'
  },
  scheduleDate: {
    type: String
  },
  description: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Compile model from schema
const Schedules = mongoose.model("tbl_schedule", tbl_schedule);

export default Schedules;
