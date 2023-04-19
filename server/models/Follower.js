const mongoose = require("mongoose");

const { Schema } = mongoose;

const followerSchema = new Schema({
  follower: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  following: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Follower = mongoose.model("Follower", followerSchema);

module.exports = Follower;
