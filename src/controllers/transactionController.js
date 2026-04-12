// In-memory database
let transactions = [];

// GET all transactions
const getTransactions = (req, res) => {
  res.json({
    message: "All transactions",
    data: transactions
  });
};

// CREATE transaction
const createTransaction = (req, res) => {
  const { amount } = req.body;

  if (!amount) {
    return res.status(400).json({
      message: "Amount is required"
    });
  }

  const newTransaction = {
    id: Date.now(),
    amount: amount,
    status: "success"
  };

  transactions.push(newTransaction);

  res.json({
    message: "Transaction created",
    transaction: newTransaction
  });
};

module.exports = {
  getTransactions,
  createTransaction
};