const mongoose = require("mongoose");

const { Schema } = mongoose;

const reactionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  article: {
    type: Schema.Types.ObjectId,
    ref: "Article",
    required: true,
  },
  reaction: {
    type: String,
    enum: ["like", "dislike"],
    required: true,
  },
});
const Reaction = mongoose.model("Reaction", reactionSchema);

module.exports = Reaction;
