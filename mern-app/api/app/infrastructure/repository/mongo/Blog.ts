import mongoose from 'mongoose';

// Define schema
const Schema = mongoose.Schema

const tbl_blog = new Schema({
  title: {
    type: String,
    index: true
  },
  content: {
    type: String,
    index: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
}).index({ title: "text", content: "text" });

// Compile model from schema
const Blog = mongoose.model("tbl_blog", tbl_blog);

export default Blog;
