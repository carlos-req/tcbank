const asyncHandler = require("express-async-handler");

//route GET /api/transactions
//access Private
const getTransactions = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get transactions" });
});

//route POST /api/transactions
//access Private
const setTransaction = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get transactions" });
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
