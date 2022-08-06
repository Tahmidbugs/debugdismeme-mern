const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 255,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 3,
    },
    profilePicture: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    coverPicture: {
      type: String,
      default:
        "https://timelinecovers.pro/facebook-cover/download/life-cycle-facebook-cover.jpg",
    },
    followers: {
      type: [String],
      default: [],
    },
    following: {
      type: [String],
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    bio: {
      type: String,
      default: "",
    },
    posts: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
