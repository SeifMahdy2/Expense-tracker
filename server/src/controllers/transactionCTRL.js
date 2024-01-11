const userSingleton = require('../User_ID');
const Transaction = require('../models/transactionModel');

const current_user= userSingleton.getUserId();
const addTrans = (req, res) => {
  const newTrans = new Transaction({
    _id:current_user,
    type:req.body.type, 
    amount:req.body.amount, 
    description:req.body.description, 
  });
    newTrans.save()
    .then(() => res.status(200).send('Transaction created successfully!'))
    .catch((error) => res.status(500).send(error));
  };

module.exports =  addTrans;