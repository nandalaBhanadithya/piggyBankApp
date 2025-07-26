import React from 'react';
import { FaPiggyBank } from 'react-icons/fa';
import { MdOutlineBrokenImage } from 'react-icons/md'; // as a "broken" indicator

function BreakBankDialog({ withdrawn, history, onNewBank }) {
  return (
    <div style={{
      maxWidth: 400,
      margin: '2em auto',
      textAlign: 'center',
      padding: 24,
      border: '2px dashed #ff6666',
      borderRadius: '1em',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Piggy bank icon with a "broken" hint next to it */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
        <FaPiggyBank size={48} color="#ff6666" style={{ marginRight: 8 }} />
        <MdOutlineBrokenImage size={40} color="#888" />
      </div>
      <h2>Piggy Bank Broken!</h2>
      <p>You withdrew: <strong>₹{withdrawn}</strong></p>
      <h3>Transaction History:</h3>
      {history.length === 0 ? (
        <p>No transactions to show.</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {history.map((txn) => (
            <li key={txn.id} style={{ marginBottom: '0.5em' }}>
              {txn.date}: ₹{txn.amount}
            </li>
          ))}
        </ul>
      )}
      <button 
        onClick={onNewBank} 
        style={{
          marginTop: 16,
          background: '#28a745',
          color: '#fff',
          padding: '0.8em 1.5em',
          border: 'none',
          borderRadius: '0.5em',
          cursor: 'pointer'
        }}>
        Start New Piggy Bank
      </button>
    </div>
  );
}

export default BreakBankDialog;
