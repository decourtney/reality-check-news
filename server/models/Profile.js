// Profile is associated with through User model

const mongoose = require("mongoose");

const { Schema } = mongoose;

const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: String,
  bio: String,
  avatar: String, // URL of the user's profile picture
  website: String,
  social: {
    twitter: String,
    facebook: String,
    instagram: String,
    linkedin: String,
  },
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;