const mongoose = require("mongoose");

const addincome = async (req, res) => {
  const Users = mongoose.model("users");
  const Transcation = mongoose.model("transactions");

  const { amount, remarks } = req.body;
  try {
    if (!amount) throw "Please enter amount";
    if (amount < 1) throw "amount must be greater than 1";

    if (!remarks) throw "Remarks is necessary";
    if (remarks.length < 2) throw "Remark must have 2 letters";
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e,
    });
    return;
  }
  try {
    await Transcation.create({
      amount: amount,
      remarks: remarks,
      user_id: req.user._id,
      transaction_type: "income",
    });
    await Users.updateOne(
      {
        _id: req.user._id,
      },
      {
        $inc: {
          balance: amount,
        },
      },
      { runValidators: true }
    );
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e.message,
    });
    return;
  }
  res.status(200).json({
    message: "income was added",
  });
};
module.exports = addincome;
