const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserScheam = new Schema(
  {
    username: {
      required: true,
      type: String,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", UserScheam);
module.exports = User;
