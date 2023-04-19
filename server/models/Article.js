const mongoose = require("mongoose");

const { Schema } = mongoose;

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  publicationDate: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    required: true,
  },
  comments: {
    type: [String],
    default: [],
    ref: "Comment",
  },
  tags: {
    type: [String],
    default: [],
  },
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
