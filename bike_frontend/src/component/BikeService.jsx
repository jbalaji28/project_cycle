import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Grid, Container, TextField, Select, MenuItem } from '@mui/material';
import MapComponent from './MapComponent'; // Ensure MapComponent is correctly imported

const Popup = ({ handleClose }) => (
  <div className="popup">
    <div className="popup-content">
      <Typography variant="h2">Request Submitted</Typography>
      <Typography variant="body1">We'll be there within 15 minutes.</Typography>
      <Button variant="contained" color="primary" onClick={handleClose}>Close</Button>
    </div>
  </div>
);

const BikeService = () => {
  const [issue, setIssue] = useState('');
  const [repairType, setRepairType] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleIssueChange = (e) => {
    setIssue(e.target.value);
  };

  const handleRepairTypeChange = (e) => {
    setRepairType(e.target.value);
  };

  const handleSubmit = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 15000); // Hide the popup after 15 seconds
  };

  return (
    <div className="service-page">
      <Container maxWidth="lg">
        <Typography variant="h1" align="center" gutterBottom>Bike Service</Typography>
        <Typography variant="body1" align="center" gutterBottom>Keep your bike in top condition with our expert repair services</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <MapComponent />
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="service-form">
              <Typography variant="h2">Report an Issue</Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                placeholder="Describe the issue you're facing"
                value={issue}
                onChange={handleIssueChange}
                variant="outlined"
                margin="normal"
              />
              <Typography variant="h2">Select Repair Type</Typography>
              <Select
                fullWidth
                value={repairType}
                onChange={handleRepairTypeChange}
                variant="outlined"
                margin="normal"
              >
                <MenuItem value="">Select Repair Type</MenuItem>
                <MenuItem value="Tune-up">Tune-up</MenuItem>
                <MenuItem value="Brake Adjustment">Brake Adjustment</MenuItem>
                <MenuItem value="Wheel Truing">Wheel Truing</MenuItem>
              </Select>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                className="submit-button"
                style={{ marginTop: '20px' }}
              >
                Submit Request
              </Button>
              {showPopup && <Popup handleClose={() => setShowPopup(false)} />}
            </div>
          </Grid>
        </Grid>
        <footer style={{ marginTop: '20px', textAlign: 'center' }}>
          <Typography variant="body1" gutterBottom>
            For urgent assistance, please call{' '}
            <a href="tel:18001234567">1-800-123-4567</a> or email{' '}
            <a href="mailto:service@bikes2ride.com">service@bikes2ride.com</a>
          </Typography>
          <Link to="/schedule-service" className="cta-button" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary">Schedule Service</Button>
          </Link>
        </footer>
      </Container>
    </div>
  );
};

export default BikeService;
