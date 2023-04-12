const mongoose = require("mongoose");

const transactionsSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  amount: {
    type: Number,
    required: [true, "Please add an amount for this transaction."],
  },
  description: {
    type: String,
  },
  payment: {
    type: String,
    required: [true, "Please indicate Credit or Debit "],
  },
  category: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Transactions", transactionsSchema);
