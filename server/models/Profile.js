const mongoose = require("mongoose");

const { Schema } = mongoose;

const profileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  picture: String,
  bio: String,
  location: String,
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;