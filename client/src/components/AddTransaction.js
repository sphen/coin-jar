import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState();
  const { addTrans } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const newTrans = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTrans(newTrans);
    setText('');
    setAmount('');
  };
  return (
    <>
      <h3 className="new">New Deposit/Withdrawal</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Name</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Your Name..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            <p>$ Amount</p>
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
          <p className="text-sm">positive = in | negative = out</p>
        </div>
        <button className="btn">Submit</button>
      </form>
    </>
  );
};
