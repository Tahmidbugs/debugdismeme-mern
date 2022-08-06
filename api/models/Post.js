const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    caption: {
      type: String,
      min: 3,
      max: 255,
    },
    imageURL: {
      type: String,
      default: "",
    },
    neutrals: {
      type: [String],
      default: [],
    },
    lols: {
      type: [String],
      default: [],
    },
    rofls: {
      type: [String],
      default: [],
    },
    userid: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
