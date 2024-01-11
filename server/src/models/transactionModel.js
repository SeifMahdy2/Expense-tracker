const mongoose = require("mongoose")
const transactionSchema = new mongoose.Schema({
  user_Id: { type: String },
  type: {type: String,required: true,enum: ["income", "expense"]},
  amount: {type: Number,required: true },
  description: {type: String},
});

const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction;