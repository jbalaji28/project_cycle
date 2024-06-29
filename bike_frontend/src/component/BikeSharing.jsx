import React from 'react';
import { Link } from 'react-router-dom';
import './BikeSharing.css';

const BikeSharing = () => {
  return (
    <div className="bike-sharing-container">
      <header className="bike-sharing-header">
        <h1>Bike Sharing</h1>
        <p>Choose an option to get started</p>
      </header>
      <section className="bike-sharing-main">
        <div className="bike-sharing-features">
          <div className="feature">
            <Link to="/lend-bike">
              <img src="https://www.shutterstock.com/image-photo/real-estate-agent-giving-keys-260nw-2431838959.jpg" alt="Lend Your Bike" />
            </Link>
            <h2>Lend Your Bike</h2>
            <p>Share your bike with the community and earn rewards</p>
          </div>
          <div className="feature">
            <Link to="/rent-bike">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReWfacXvg8cJBw_8C2H5KXhQuvZVKD83zEww&s" alt="Rent a Bike" />
            </Link>
            <h2>Rent a Bike</h2>
            <p>Find a bike to rent and start your journey</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BikeSharing;
