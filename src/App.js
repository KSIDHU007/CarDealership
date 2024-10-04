// src/App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [price, setPrice] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [tradeIn, setTradeIn] = useState('');
  const [termMonths, setTermMonths] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculatePayment = (e) => {
    e.preventDefault();

    const loanAmount = price - downPayment - tradeIn;
    const monthlyInterestRate = (interestRate / 100) / 12;
    const totalPayments = termMonths;

    const monthly = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));

    setMonthlyPayment(monthly.toFixed(2));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Car Financing Calculator</h1>
      <form onSubmit={calculatePayment} className="mt-4">
        <div className="form-group">
          <label>Car Price ($)</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Interest Rate (%)</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Down Payment ($)</label>
          <input
            type="number"
            className="form-control"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Trade In Value ($)</label>
          <input
            type="number"
            className="form-control"
            value={tradeIn}
            onChange={(e) => setTradeIn(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Term (Months)</label>
          <input
            type="number"
            className="form-control"
            value={termMonths}
            onChange={(e) => setTermMonths(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Calculate Monthly Payment</button>
      </form>

      {monthlyPayment !== null && (
        <div className="mt-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Monthly Payment</h5>
              <p className="card-text">${monthlyPayment}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
