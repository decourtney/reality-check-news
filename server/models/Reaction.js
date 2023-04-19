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
    post: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
  },
  { timestamps: true }
);

const Reaction = mongoose.model("Reaction", reactionSchema);

module.exports = Reaction;
