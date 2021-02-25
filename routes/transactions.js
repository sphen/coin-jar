const express = require('express');
const router = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteteTransaction,
} = require('../controllers/transaction-controller');

router.route('/').get(getTransactions).post(addTransaction);

router.route('/:id').delete(deleteteTransaction);

module.exports = router;
