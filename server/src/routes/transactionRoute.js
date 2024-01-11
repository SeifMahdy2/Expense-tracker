const express = require('express');
const TransactionRouter = express.Router();
const addTrans = require('../controllers/transactionCTRL');

// Route to add a new user
TransactionRouter.post('/', addTrans);

module.exports = TransactionRouter;