// Media belongs to an Article

const mongoose = require("mongoose");

const { Schema } = mongoose;

const mediaSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    article: {
      type: Schema.Types.ObjectId,
      ref: "Article",
    },
  },
  { timestamps: true }
);


const Media = mongoose.model("Media", mediaSchema);

module.exports = Media;
