const asyncHandler = require("express-async-handler");

const Transaction = require("../models/transactionModel");

//route GET /api/transactions
//access Private
const getTransactions = asyncHandler(async (req, res) => {
  const transaction = await Transaction.find();

  res.status(200).json(transaction);
});

//route POST /api/transactions
//access Private
const setTransaction = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a Transaction Amount");
  }

  const transaction = await Transaction.create({
    transaction: req.body.text,
  });

  res.status(200).json(transaction);
});

//route PUT /api/transactions/:id
//access Private
const updateTransaction = asyncHandler(async (req, res) => {
  res.status(201).json({ message: `Update transaction ${req.params.id}` });
});

//route DEL /api/transactions/:id
//access Private
const deleteTransaction = asyncHandler(async (req, res) => {
  res.status(201).json({ message: `Delete transaction ${req.params.id}` });
});

module.exports = {
  getTransactions,
  setTransaction,
  updateTransaction,
  deleteTransaction,
};
