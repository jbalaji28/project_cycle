// MarathonPopup.js

import React from 'react';
import { Link } from 'react-router-dom';

const MarathonPopup = () => {
  return (
    <div className="marathon-popup">
      <img
        src="https://example.com/marathon-image.jpg" // Replace with your image URL
        alt="Cycle Marathon Popup"
        className="marathon-image"
      />
      <div className="marathon-content">
        <h2>Join Our Cycle Marathon!</h2>
        <p>Register now for our upcoming cycle marathon and pedal towards a healthier community.</p>
        <Link to="/cycle-marathon" className="join-now-button">Join Now</Link>
      </div>
    </div>
  );
};

export default MarathonPopup;
