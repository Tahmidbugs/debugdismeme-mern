const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const PostRoute = require("./routes/posts");

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
app.use(morgan("common"));
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", PostRoute);

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });
app.post("/api/upload", upload.single("image"), (req, res) => {
  try {
    console.log(req.file);
    return res.status(200).json("File uploaded");
  } catch (err) {
    console.log("We have a problem", err);
    return res.status(500).json("couldn't upload file");
  }
});

//routes

app.listen(8800, () => {
  console.log("Server is running on port 8800");
});
