// Articles belong to a User, belong to multiple categories, has multiple comments, has media (can change to multiple)

const mongoose = require("mongoose");

const { Schema } = mongoose;

const articleSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    reactions: {
      type: Map,
      of: String,
      default: {},
    },
    media: {
      type: Schema.Types.ObjectId,
      ref: "Media",
    },
    categories: [
      {
        type: Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
