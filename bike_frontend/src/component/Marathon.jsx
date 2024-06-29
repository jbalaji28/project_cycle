import React from 'react';
import { Link } from 'react-router-dom';
import './Marathon.css';
import CustomNavbar from './CustomNavbar';
import Footer from './Footer';

const Marathon = () => {
  return (
    <div className="marathon-container">
      <CustomNavbar />
      <header className="marathon-header">
        <h1>Annual Cycle Marathon</h1>
        <p>Join us for an unforgettable cycling experience through picturesque landscapes</p>
      </header>
      <section className="marathon-details">
        <div className="marathon-info">
          <h2>Event Details</h2>
          <p><strong>Date:</strong> July 15th, 2024</p>
          <p><strong>Location:</strong> Start at City Park, Finish at Waterfront</p>
          <p><strong>Time:</strong> 8:00 AM - 3:00 PM</p>
          <p><strong>Distance:</strong> 50 km</p>
        </div>
        <div className="marathon-description">
          <h2>About the Event</h2>
          <p>Our annual cycle marathon is more than just a race; it's a celebration of community, health, and the environment. Participants will ride through some of the most scenic routes, enjoying the fresh air and camaraderie with fellow cyclists. Whether you're a seasoned cyclist or a beginner, this event offers an opportunity to challenge yourself and make new friends.</p>
          <p>We have various support stations along the route, providing water, snacks, and first aid to ensure all participants have a safe and enjoyable experience. At the finish line, join us for a celebration with music, food, and awards for top performers.</p>
        </div>
      </section>
      <section className="marathon-registration">
        <h2>Register Now</h2>
        <p>Don't miss out on this exciting event! Register now to secure your spot and be a part of an unforgettable experience.</p>
        <Link to="/register">
          <button className="register-button">Register</button>
        </Link>
      </section>
      <Footer />
    </div>
  );
};

export default Marathon;
