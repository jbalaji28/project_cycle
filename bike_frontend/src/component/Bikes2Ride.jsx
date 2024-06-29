import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Chatbot from './Chatbot';
import Footer from './Footer';
import QRCode from 'react-qr-code';
import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Bikes2Ride.css';

const Bikes2Ride = () => {
  const [showQRCode, setShowQRCode] = useState(false);

  const toggleQRCode = () => {
    setShowQRCode(!showQRCode);
  };

  return (
    <div className="bikes2ride-container">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Bikes2Ride</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section className="hero-section text-center bg-light py-5">
        <Container>
          <h1 className="display-4">WE RENT THE BEST BICYCLES OUT!</h1>
          <p className="lead">With more than 250 bicycle models in stock and awesome rental fees, we are the best in our field of expertise!</p>
          <Button variant="primary" onClick={toggleQRCode}>Show QR Code</Button>
          {showQRCode && (
            <div className="qr-code mt-3">
              <p>Scan the QR to book now</p>
              <QRCode value="https://yourwebsite.com/rental-confirmation" />
            </div>
          )}
        </Container>
      </section>

      <section className="features-section py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h2>Trusted by thousands of customers</h2>
              <p>In the course of the last 18 years that we've been working in the bicycle rental business, we were able to develop a real fan base of clients, maintain a huge fleet of bikes and become the most trusted in the industry.</p>
              <address>
                11559 Ventura Boulevard, Studio City, CA 91604
              </address>
            </Col>
            <Col md={6}>
              <img src="https://media1.tenor.com/m/9izp9dysmJIAAAAC/brown-cony.gif" alt="Avatar Dancing" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <div className="chatbot-container py-5">
        <Container>
          <Chatbot />
        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default Bikes2Ride;
