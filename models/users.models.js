const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name must be given"],
    },
    email: {
      type: String,
      required: [true, "Email must be given"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password must be given"],
    },
    address: {
      type: String,
    },
    balance: {
      type: Number,
      required: [true, "Balance must be given"],
    },
  },
  {
    timestamps: true,
  }
);
const usermodel = mongoose.model("users", userSchema);

module.exports = usermodel;
