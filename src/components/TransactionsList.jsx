import React from 'react';

function TransactionsList({ transactions }) {
  if (!transactions || transactions.length === 0) {
    return <p>No transactions yet.</p>;
  }

  return (
    <table style={{ width: '100%', marginTop: '1em', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ borderBottom: '1px solid #ccc', padding: '0.5em' }}>Date/Time</th>
          <th style={{ borderBottom: '1px solid #ccc', padding: '0.5em' }}>Amount (₹)</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(txn => (
          <tr key={txn.id}>
            <td style={{ padding: '0.5em', borderBottom: '1px solid #eee' }}>{txn.date}</td>
            <td style={{ padding: '0.5em', borderBottom: '1px solid #eee' }}>{txn.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
