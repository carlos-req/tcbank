const express = require("express");
const router = express.Router();
const {
  getTransactions,
  setTransaction,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transactionsController.js");

//chain GET & POST req to the same route
router.route("/").get(getTransactions).post(setTransaction);

//chain PUT & DELETE req to the same route
router.route("/:id").put(updateTransaction).delete(deleteTransaction);

module.exports = router;
