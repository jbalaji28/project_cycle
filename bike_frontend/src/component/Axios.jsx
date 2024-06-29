import React, { useState } from 'react';
import axios from 'axios';

const SentimentAnalysis = () => {
  const [text, setText] = useState('');
  const [sentiment, setSentiment] = useState('');

  const analyzeSentiment = async () => {
    try {
      const response = await axios.post('/sentiment-analysis', { text });
      setSentiment(response.data.sentiment);
    } catch (error) {
      console.error('Error analyzing sentiment:', error);
    }
  };

  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={analyzeSentiment}>Analyze Sentiment</button>
      {sentiment && <p>Sentiment: {sentiment}</p>}
    </div>
  );
};

export default SentimentAnalysis;
