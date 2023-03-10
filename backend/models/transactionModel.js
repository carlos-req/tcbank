const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema(
  {
    amount: {
      type: Number,
      required: [true, "Please add an amount for this transaction."],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Transaction", transactionSchema);
