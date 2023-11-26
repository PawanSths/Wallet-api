const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

const userlogin = async (req, res) => {
  const user = mongoose.model("users");
  const { email, password } = req.body;
  try {
    if (!email) throw "Please provide email";
    if (!password) throw "Please provide password";

    const getuser = await user.findOne({
      email: email,
    });

    if (!getuser) throw "This email doesnot exist";

    const matched = await bcrypt.compare(password, getuser.password);
    if (!matched) throw "Email and password donot match ";
  } catch (e) {
    res.status(400).json({
      status: "Not sucessful",
      message: e,
    });
    return;
  }
  const getuserfortoken = await user.findOne({
    email: email,
  });

  const accessToken = await jsonwebtoken.sign(
    {
      _id: getuserfortoken._id,
      email: getuserfortoken.email,
      name: getuserfortoken.name,
    },
    process.env.jwt_salt,
    { expiresIn: "90 days" }
  );

  res.status(200).json({
    Status: "Sucessfully logged in",
    accessToken,
  });
};
module.exports = userlogin;
