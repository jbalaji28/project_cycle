import React, { useState } from 'react';
import './Chatbot.css'; // Import Chatbot styles
import nlp from 'compromise'; // Import Compromise for NLP

const Chatbot = () => {
  const [messages, setMessages] = useState([]); // State to store chat messages
  const [input, setInput] = useState(''); // State to store user input

  // Function to handle sending a message
  const sendMessage = (message) => {
    setMessages([...messages, { text: message, sender: 'user' }]);
    // Get bot response using Compromise NLP
    setTimeout(() => {
      const botResponse = getBotResponse(message);
      setMessages([...messages, { text: botResponse, sender: 'bot' }]);
    }, 500);
  };

  // Function to get bot response based on user input
  const getBotResponse = (userMessage) => {
    // Use Compromise NLP to process user message
    const doc = nlp(userMessage);
    const verb = doc.verbs().toInfinitive().out();
    const noun = doc.nouns().out();

    // Example bot responses based on user input
    if (verb === 'rent' && noun === 'bike') {
      return 'Sure! Please visit our Bike Rental page for more information.';
    } else if (verb === 'ride' && noun === 'local') {
      return 'You can explore our Ride Like a Local tours for a unique biking experience.';
    } else if (noun === 'tour' && verb === 'package') {
      return 'We offer various tour packages to exciting destinations. Check out our Tours section for more details.';
    } else {
      return "I'm sorry, I didn't understand that. How can I assist you?";
    }
  };

  // Function to handle button click
  const handleButtonClick = (option) => {
    sendMessage(option);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <span className="chatbot-title">Paramesh Bot</span>
        {/* Add chatbot icon */}
        <img
          className="chatbot-image"
          src="https://t4.ftcdn.net/jpg/04/46/38/69/360_F_446386956_DiOrdcxDFWKWFuzVUCugstxz0zOGMHnA.jpg"
          alt="Paramesh Bot"
        />
      </div>
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-options">
        <button onClick={() => handleButtonClick('Rent a bike')}>Rent a bike</button>
        <button onClick={() => handleButtonClick('Ride like a local')}>Ride like a local</button>
        <button onClick={() => handleButtonClick('Tour packages')}>Tour packages</button>
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              sendMessage(input);
              setInput('');
            }
          }}
        />
        <button onClick={() => sendMessage(input)}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
