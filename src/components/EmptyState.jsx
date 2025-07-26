import React from 'react';

function EmptyState({ onNewBank }) {
  return (
    <div style={{ maxWidth: 400, margin: '3em auto', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h2>No active piggy bank.</h2>
      <button
        onClick={onNewBank}
        style={{ background: '#007bff', color: 'white', padding: '0.8em 1.5em', borderRadius: '0.5em', border: 'none', cursor: 'pointer' }}
      >
        Create New Piggy Bank
      </button>
    </div>
  );
}

export default EmptyState;
