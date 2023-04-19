const mongoose = require("mongoose");

const { Schema } = mongoose;

const mongoose = require("mongoose");

const mediaSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  caption: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Media = mongoose.model("Media", mediaSchema);

module.exports = Media;
