const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userregister = async (req, res) => {
  const user = mongoose.model("users");

  const { name, email, password, address, balance } = req.body;

  const encPassword = await bcrypt.hash(password, 10);

  try {
    await user.create({
      name,
      email,
      password: encPassword,
      address,
      balance,
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e.message,
    });
    return;
  }
  res.status(200).json({
    Status: "Sucessful",
  });
};
module.exports = userregister;
