const mongoose = require("mongoose");

const { Schema } = mongoose;

const commentSchema = new Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  article: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Article",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  publicationDate: {
    type: Date,
    default: Date.now,
  },
});

const Comment = mongoose.model("User", commentSchema);

module.exports = Comment;
