const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");
const mongoose = require("mongoose");
const upload = multer();

require("dotenv").config();

const app = express();

app.use(cors());
app.use(upload.none());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const users = require("./routes/users");
const exercise = require("./routes/exercise");

app.use("/users", users);
app.use("/exercise", exercise);
const port = process.env.PORT || 5000;
const uri = process.env.URL;
mongoose.connect(uri, () => {
  console.log("connected with database");
});

app.listen(port, () => {
  console.log(`server running on port:${port} `);
});
