// Reactions belong to Users and Posts

const mongoose = require("mongoose");

const { Schema } = mongoose;

const reactionSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["like", "dislike"],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    article: {
      type: Schema.Types.ObjectId,
      ref: "Article",
    },
    comment: {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    }
  },
  { timestamps: true }
);

const Reaction = mongoose.model("Reaction", reactionSchema);

module.exports = Reaction;
