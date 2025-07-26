import React, { useState } from 'react';

import PiggyBank from './components/PiggyBank';
import BreakBankDialog from './components/BreakBankDialog';
import EmptyState from './components/EmptyState';


function App() {
  const [hasPiggyBank, setHasPiggyBank] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const [brokenBank, setBrokenBank] = useState(null);

  const addMoney = (amount) => {
    const amt = Number(amount);
    if (!amt || amt <= 0) return;
    const txn = {
      id: Date.now(),
      amount: amt,
      date: new Date().toLocaleString(),
    };
    setTransactions([...transactions, txn]);
    setBalance(balance + amt);
  };

  const breakBank = () => {
    setBrokenBank({ withdrawn: balance, history: transactions });
    setHasPiggyBank(false);
    setTransactions([]);
    setBalance(0);
  };

  const startNewBank = () => {
    setHasPiggyBank(true);
    setBrokenBank(null);
    setTransactions([]);
    setBalance(0);
  };

  if (!hasPiggyBank && brokenBank) {
    return (
      <BreakBankDialog
        withdrawn={brokenBank.withdrawn}
        history={brokenBank.history}
        onNewBank={startNewBank}
      />
    );
  }

  if (!hasPiggyBank) {
    return <EmptyState onNewBank={startNewBank} />;
  }

  return (
    <PiggyBank
      balance={balance}
      transactions={transactions}
      onAddMoney={addMoney}
      onBreak={breakBank}
    />
  );
}

export default App;
