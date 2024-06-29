import React from 'react';

const BlockchainVisualization = () => {
  // Dummy blockchain data for demonstration
  const blockchainData = [
    {
      index: 1,
      timestamp: '2024-06-12T12:00:00Z',
      data: 'Transaction data 1',
      previousHash: '0000',
      hash: 'hash1'
    },
    {
      index: 2,
      timestamp: '2024-06-12T12:05:00Z',
      data: 'Transaction data 2',
      previousHash: 'hash1',
      hash: 'hash2'
    },
    // Add more blocks here as needed
  ];

  return (
    <div className="blockchain-container">
      <h2>Blockchain Visualization</h2>
      <div className="blocks">
        {blockchainData.map(block => (
          <div key={block.index} className="block">
            <h3>Block {block.index}</h3>
            <p><strong>Timestamp:</strong> {block.timestamp}</p>
            <p><strong>Data:</strong> {block.data}</p>
            <p><strong>Previous Hash:</strong> {block.previousHash}</p>
            <p><strong>Hash:</strong> {block.hash}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockchainVisualization;
