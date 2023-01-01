const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const PostRoute = require("./routes/posts");
const path = require("path");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  });

//middleware
app.use(express.json());
app.use(helmet());
// app.use(morgan("common"));
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", PostRoute);

const multer = require("multer");

dotenv.config();

// Initialize the Amazon S3 client
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "us-east-1",
});

const s3 = new AWS.S3();

// Set up Multer to use S3 for file storage
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "debugthismeme",
    acl: "public-read",
    key: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    // The image has been uploaded to S3
    // Now you can store the image URL in your database
    const imageUrl = req.file.location;
    console.log("image URL is", imageUrl);
    res.status(200).json(imageUrl);
  } catch (err) {
    console.error(err);
    res.status(500).json("Error uploading file");
  }
});
//routes

app.listen(8800, () => {
  console.log("Server is running on port 8800");
});
