import React from 'react';
import AddMoneyForm from './AddMoneyForm';
import TransactionsList from './TransactionsList';
import styles from './PiggyBank.module.css';
import { FaPiggyBank } from 'react-icons/fa';

function PiggyBank({ balance, transactions, onAddMoney, onBreak }) {
  return (
    <div className={styles.piggyContainer}>
      {/* Piggy bank icon for visual flair */}
      <FaPiggyBank size={48} color="#f5a623" style={{ marginBottom: 16, display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
      
      <h2 className={styles.balance}>Piggy Bank Balance: ₹{balance}</h2>
      
      <button className={styles.breakBtn} onClick={onBreak}>
        Break Piggy Bank
      </button>
      
      <TransactionsList transactions={transactions} />
      
      <AddMoneyForm onAddMoney={onAddMoney} />
    </div>
  );
}

export default PiggyBank;
