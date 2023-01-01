const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//create post
router.post("/", async (req, res) => {
  const post = await new Post(req.body);
  try {
    const savedPost = await post.save();
    console.log("posted to mongodb");
    res.status(200).json(savedPost);
  } catch (err) {
    console.log(err);
  }
});

//get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    console.log(posts);
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
  }
});

//get user's posts
router.get("/profile/:user", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.user });
    console.log("looking for user: ", req.params.user);
    console.log("found user: ", user);
    console.log("his id: ", user._id);
    const posts = await Post.find({ userid: user._id });
    console.log("his posts: ", posts);
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
  }
});

//update post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.user === req.body.user) {
      await Post.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("UPDATED");
    } else {
      return res
        .status(401)
        .json({ message: "You are not authorized to edit this post" });
    }
  } catch (err) {
    console.log(err);
  }
});

//delete post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    res.status(200).json("DELETED");
  } catch (err) {
    console.log(err);
  }
});

//like post
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userID)) {
      post.likes.push(req.body.userID);
      console.log("liked");
      res.status(200).json(post);
    } else {
      post.likes.splice(post.likes.indexOf(req.body.userID), 1);

      console.log("unliked");
      res.status(200).json(post);
    }
    await post.save();
  } catch (err) {
    console.log(err);
  }
});

//get post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
