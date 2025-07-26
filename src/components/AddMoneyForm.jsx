import React, { useState } from 'react';
import styles from './AddMoneyForm.module.css';

function AddMoneyForm({ onAddMoney }) {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMoney(amount);
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="number"
        min="1"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        required
        className={styles.amountInput}
      />
      <button type="submit" className={styles.addButton}>
        Add Money
      </button>
    </form>
  );
}

export default AddMoneyForm;
