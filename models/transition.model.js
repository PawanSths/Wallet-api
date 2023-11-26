const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: [true, "Amount must be given"],
    },
    remarks: {
      type: String,
      required: [true, "Remarks must be given"],
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: [true, "User_id must be given"],
    },
    transaction_type: {
      type: String,
      enum: ["income", "expenses"],
      required: [true, "Type is required"],
    },
  },
  {
    timestamps: true,
  }
);
const usermodel = mongoose.model("transactions", transactionSchema);

module.exports = usermodel;
