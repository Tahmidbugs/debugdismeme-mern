const router = require("express").Router();
const bcrypt = require("bcrypt");
const e = require("express");
const User = require("../models/User");

//update user
router.put("/:id", async (req, res) => {
  if (req.body.password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
  }
  try {
    const user = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});
//delete user
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json("DELETED");
  } catch (err) {
    console.log(err);
  }
});
//lh:8800/users?userid=2312312 &username=john
//get user
router.get("/", async (req, res) => {
  const userid = req.query.userid;
  const uname = req.query.username;
  try {
    const user = userid
      ? await User.findOne({ _id: userid })
      : await User.findOne({ username: uname });
    const { _id, username, email, profilePicture, ...rest } = user._doc;

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

//get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
});

//follow user
router.put("/:id/follow", async (req, res) => {
  if (req.body.userID !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userID);
      if (!user.followers.includes(currentUser._id)) {
        user.followers.push(currentUser._id);
        currentUser.following.push(user._id);
        await user.save();
        await currentUser.save();
        res.status(200).json(user);
        res.status(200).json(currentUser);
      } else {
        return res.status(400).json({ message: "Already following" });
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    res.status(400).json({ message: "You can't follow yourself" });
  }
});

//unfollow user
router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userID !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userID);
      if (user.followers.includes(currentUser._id)) {
        user.followers.splice(user.followers.indexOf(currentUser._id), 1);
        currentUser.following.splice(
          currentUser.following.indexOf(user._id),
          1
        );
        await user.save();
        await currentUser.save();
        res.status(200).json(user);
        res.status(200).json(currentUser);
      } else {
        return res.status(400).json({ message: "Not following" });
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    res.status(400).json({ message: "You can't unfollow yourself" });
  }
});

module.exports = router;
