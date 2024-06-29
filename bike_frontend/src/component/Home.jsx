import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import Footer from './Footer'; // Importing Footer component
import './Home.css';
import CustomNavbar from './CustomNavbar';

// Popup component definition
const Popup = ({ onClose }) => (
  <Card className="popup">
    <CardMedia
      component="img"
      height="140"
      image="https://birkebeiner.no/assets/phwi/5951-81e09e08426a44c18441939b49df6ab6-std/7654tim106650.jpeg"
      alt="Special Event"
    />
    <CardContent>
      <Typography variant="h5" component="div">
        Join Our Annual Cycle Marathon!
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Don't miss out on the event of the year! Join cyclists from around the world in our scenic marathon through picturesque landscapes.
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Date: July 15th, 2024<br />
        Location: Start at City Park, Finish at Waterfront
      </Typography>
    </CardContent>
    <div className="popup-buttons">
      <IconButton className="popup-close" onClick={onClose}>
        <CloseIcon />
      </IconButton>
      <Link to="/marathon" className="popup-join-link">
        <button className="popup-join">Join Now</button>
      </Link>
    </div>
  </Card>
);

const Home = () => {
  const [showPopup, setShowPopup] = useState(true); // State to manage popup visibility

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="home-container">
      <CustomNavbar /> {/* Including Navbar component */}
      <header className="home-header">
        <h1>Welcome to Bikes2Ride</h1>
        <p>Your premier destination for bicycle rentals and tours</p>
      </header>
      <section className="home-main">
        <div className="home-features">
          <div className="feature">
            <Link to="/bike-rental">
              <img src="https://rentop.in/blog/wp-content/uploads/2023/05/Cycle-on-Rent-in-Bangalore.jpg" alt="Bike Rental" />
            </Link>
            <h2>Bike Rental</h2>
            <p>Explore the city on our high-quality bicycles</p>
          </div>
          <div className="feature">
            <Link to="/bike-service">
              <img src="https://media.istockphoto.com/id/615281154/photo/mechanic-repairing-bicycle-rear-wheel.jpg?s=612x612&w=0&k=20&c=nBkGWTy2ERwp-8dATCiNSo_iAP1AVfpFScAwNr-wFoU=" alt="Bike Workshop" />
            </Link>
            <h2>Bike Service</h2>
            <p>Keep your bike in top condition with our repair services</p>
          </div>
          <div className="feature">
            <Link to="/guided-tours">
              <img src="https://static.toiimg.com/thumb/msid-100707119,width-1280,height-720,resizemode-4/100707119.jpg" alt="Guided Tours" />
            </Link>
            <h2>Guided Tours</h2>
            <p>Discover hidden gems with our experienced guides</p>
          </div>
          <div className="feature">
            <Link to="/bike-sharing">
              <img src="https://images.giant-bicycles.com/jxgcgsijgvx70qaoylld/preview.jpg" alt="Bike Sharing" />
            </Link>
            <h2>Bike Sharing</h2>
            <p>Conveniently share bikes within the community</p>
          </div>
        </div>
      </section>
      {showPopup && <Popup onClose={handleClosePopup} />} {/* Rendering Popup component */}
      <Footer /> {/* Including Footer component */}
    </div>
  );
};

export default Home;
