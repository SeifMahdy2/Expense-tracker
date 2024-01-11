import { useState, useEffect } from 'react';
import './Main.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Main() {
  const [Type, setType] = useState('choose');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [transactions, setTransactions] = useState([]);

  const resetForm = () => {
    setType('choose');
    setAmount('');
    setDescription('');
  };

  useEffect(() => {
    // Fetch transactions when the component mounts
    axios.get('http://localhost:4000/api/transactions')
      .then(response => setTransactions(response.data))
      .catch(error => console.error('Error fetching transactions:', error));
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  const validateTrans = () => {
    if (!amount || !description) {
      window.alert('Please fill out all fields');
      return false;
    }
    if (amount < 5) {
      window.alert('Amount can\'t be less than 5');
      return false;
    }
    if (Type === 'choose') {
      window.alert('Select a type of transaction');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateTrans()) {
      axios.post('http://localhost:4000/transactions', {
        Type,
        amount,
        description,
      });

      if (Type === 'expense') {
        axios.post('http://localhost:4000/expense', {
          Type,
          amount,
          description,
        });
      }

      if (Type === 'income') {
        axios.post('http://localhost:4000/income', {
          Type,
          amount,
          description,
        });
      }

      resetForm();
    }
  };
  let balance = 0;

  for (const transaction of transactions) {
    const transactionAmount = parseFloat(transaction.amount);
    balance += transaction.Type === 'expense' ? -transactionAmount : transactionAmount;
  }

  balance = balance.toFixed(2);
  const fraction = balance.split('.')[1];
  balance = balance.split('.')[0];

  return (
    <div className="Main">
      <header className="Main-header">
        <div className="navbar">
          <h1>FlexTracker</h1>
          <h3>Please Reload the page when you add a transaction</h3>
          <Link to="/" type="submit">
            <button>Logout</button>
          </Link>
        </div>
      </header>
      <main>
        <h1>${balance}<span>{fraction}</span></h1>
        <form onSubmit={handleSubmit}>
          <div className="basic">
            <select value={Type} onChange={(e) => { setType(e.target.value); console.log('Selected Type:', e.target.value); }}>
              <option value="choose">--Choose--</option>
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type="Number"
              placeholder="Amount"
            />
          </div>
          <div className="description">
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />
          </div>
          <button type="submit">Add new transaction</button>
        </form>
        <div className="transactions">
          {transactions.map((transaction, index) => (
            <div className="transaction" key={index}>
              <div className="left">
                <div className="name">{transaction.name}</div>
                <div className="description">{transaction.description}</div>
              </div>
              <div className="right">
              <div className={`price ${transaction.Type === 'expense' ? 'red' : 'green'}`}>
                {transaction.Type === 'expense' ? '-' : '+'}${transaction.amount}
              </div>
                <div className="datetime">{transaction.datetime}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Main;
