const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema({
  amount: {
    type: Number,
    required: [true, "Please add an amount for this transaction."],
  },
  description: String,
  payment: {
    type: String,
    required: [true, "Please indicate Credit or Debit "],
  },
  category: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Transaction", transactionSchema);
