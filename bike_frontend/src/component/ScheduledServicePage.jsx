// ScheduledServicePage.js

import React, { useState } from 'react';

import './ScheduledServicePage.css';

const ScheduledServicePage = () => {
  // State variables to store form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your logic to handle the form submission (e.g., send data to backend)
    console.log('Form submitted:', { name, email, phone, serviceType, appointmentDate });
    // Reset form fields after submission
    setName('');
    setEmail('');
    setPhone('');
    setServiceType('');
    setAppointmentDate('');
  };

  return (
    <div className="scheduled-service-page">
      <h1>Schedule Service</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="serviceType">Service Type:</label>
          <select id="serviceType" value={serviceType} onChange={(e) => setServiceType(e.target.value)} required>
            <option value="">Select Service Type</option>
            <option value="Basic">Basic Service</option>
            <option value="Full">Full Service</option>
            <option value="Custom">Custom Service</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="appointmentDate">Appointment Date:</label>
          <input type="date" id="appointmentDate" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} required />
        </div>
        <button type="submit">Schedule Appointment</button>
      </form>
    </div>
  );
};

export default ScheduledServicePage;
