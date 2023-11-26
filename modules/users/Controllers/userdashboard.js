const mongoose = require("mongoose");

const userDashboard = async (req, res) => {
  const user = mongoose.model("users");
  const Transcation = mongoose.model("transactions");

  const getuserTransaction = await Transcation.find({
    user_id: req.user._id,
  })
    .sort("-createdAt")
    .select("remarks amount transaction_type");

  const getuserData = await user
    .findOne({
      _id: req.user._id,
    })
    .select("balance");
  res.status(200).json({
    data: getuserData,
    transactions: getuserTransaction,
  });
};
module.exports = userDashboard;
