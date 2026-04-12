const express = require("express");
const router = express.Router();

const {
  getTransactions,
  createTransaction
} = require("../controllers/transactionController");

// Routes
router.get("/", getTransactions);
router.post("/", createTransaction);

module.exports = router;