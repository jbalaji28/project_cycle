import React from 'react';
import './Register.css';
import CustomNavbar from './CustomNavbar';
import Footer from './Footer';

const Register = () => {
  return (
    <div className="register-container">
      <CustomNavbar />
      <header className="register-header">
        <h1>Register for the Annual Cycle Marathon</h1>
      </header>
      <section className="register-form">
        <p>Registration form coming soon...</p>
      </section>
      <Footer />
    </div>
  );
};

export default Register;
