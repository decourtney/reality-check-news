// Post is the shell for Comments and Articles. Post belongs to a User

const mongoose = require("mongoose");

const { Schema } = mongoose;

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    media: {
      type: Schema.Types.ObjectId,
      ref: "Media",
    },
    reactions: {
      type: Map,
      of: String,
      default: {},
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
