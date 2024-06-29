import React, { useState, useEffect } from 'react'; // Added useEffect
import CustomNavbar from './CustomNavbar';
import Footer from './Footer';
import {
  Button,
  Menu,
  MenuItem,
  TextField,
  Typography,
  Card,
  CardContent,
  CardActions,
  Box,
  Grid,
  Divider,
  Container,
  CircularProgress,
  Snackbar, // Added Snackbar for notifications
} from '@mui/material';
import QrCode from 'qrcode.react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import BlockchainVisualization from './BlockchainVisualization';
import './Rent.css';

const Rent = () => {
  const [tokenBalance, setTokenBalance] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [showQR, setShowQR] = useState(false);
  const [rentalDuration, setRentalDuration] = useState(1);
  const [rentalPrice, setRentalPrice] = useState(8);
  const [upiId, setUpiId] = useState('');
  const [blockchainVisible, setBlockchainVisible] = useState(false);
  const [dailyDistance, setDailyDistance] = useState(0);
  const [voucherMessage, setVoucherMessage] = useState(''); // State for voucher redemption message
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State for snackbar visibility

  useEffect(() => {
    if (dailyDistance >= 10) {
      setTokenBalance((prevBalance) => prevBalance + 1);
      setDailyDistance(0); // Reset daily distance after earning a token
    }
  }, [dailyDistance]);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
    handleMenuClose();
    if (method === 'Scan QR') {
      setShowQR(true);
    } else {
      setShowQR(false);
    }
  };

  const handleIncreaseDuration = () => {
    const newDuration = rentalDuration + 1;
    const newPrice = newDuration * 8;
    setRentalDuration(newDuration);
    setRentalPrice(newPrice);
  };

  const handleDecreaseDuration = () => {
    if (rentalDuration > 1) {
      const newDuration = rentalDuration - 1;
      const newPrice = newDuration * 8;
      setRentalDuration(newDuration);
      setRentalPrice(newPrice);
    }
  };

  const handleUpiIdChange = (event) => {
    setUpiId(event.target.value);
  };

  const handleProceedPayment = () => {
    console.log("Proceeding with payment...");
    setBlockchainVisible(true);
  };

  const handleRentalTransaction = () => {
    const tokensEarned = rentalDuration;
    setTokenBalance((prevBalance) => prevBalance + tokensEarned);
  };

  const handleLogDistance = () => {
    const distance = parseFloat(prompt('Enter the distance cycled today (in km):', '0'));
    if (!isNaN(distance) && distance > 0) {
      setDailyDistance((prevDistance) => prevDistance + distance);
    }
  };

  const handleRedeemVoucher = () => {
    if (tokenBalance >= 10) {
      setTokenBalance((prevBalance) => prevBalance - 10);
      setVoucherMessage('Congratulations! You have redeemed a ₹100 Amazon gift voucher.Please check your mail');
    } else {
      setVoucherMessage('You need at least 18 tokens to redeem a voucher.');
    }
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="rent-page">
      <CustomNavbar />
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h4" component="h1" className="rent-title">
            Rent a Bike
          </Typography>
          <Typography variant="body1" className="rent-description">
            Choose your bike, select rental duration, and proceed with payment.
          </Typography>
          <Divider />

          <Grid container spacing={4} mt={2}>
            <Grid item xs={12} md={8}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Select Payment Method</Typography>
                  <Button variant="contained" color="primary" onClick={handleMenuOpen} style={{ marginTop: '16px' }}>
                    Select Payment Method
                  </Button>
                  <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                    <MenuItem onClick={() => handlePaymentMethodSelect('UPI')}>UPI</MenuItem>
                    <MenuItem onClick={() => handlePaymentMethodSelect('Scan QR')}>Scan QR</MenuItem>
                  </Menu>
                  {selectedPaymentMethod && (
                    <Typography variant="subtitle1" style={{ marginTop: '16px' }}>
                      Selected Method: {selectedPaymentMethod}
                    </Typography>
                  )}
                  {selectedPaymentMethod === 'UPI' && (
                    <TextField
                      label="Enter your UPI ID"
                      variant="outlined"
                      value={upiId}
                      onChange={handleUpiIdChange}
                      fullWidth
                      style={{ marginTop: '16px' }}
                    />
                  )}
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => { handleRentalTransaction(); handleProceedPayment(); }}
                    fullWidth
                  >
                    Proceed Payment
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Rental Duration</Typography>
                  <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
                    <Button variant="contained" color="secondary" onClick={handleDecreaseDuration}>-</Button>
                    <Typography variant="h6">{rentalDuration} Hours</Typography>
                    <Button variant="contained" color="secondary" onClick={handleIncreaseDuration}>+</Button>
                  </Box>
                  <Typography variant="h6" color="textSecondary" style={{ marginTop: '16px' }}>
                    Price: ₹{rentalPrice}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Box mt={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Your Token Balance: {tokenBalance} Tokens</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleRedeemVoucher}
                  style={{ marginTop: '16px' }}
                >
                  Redeem for ₹100 Amazon Voucher,
                </Button>
              </CardContent>
            </Card>
          </Box>

          <Box mt={4}>
            <Button variant="contained" color="primary" onClick={handleLogDistance}>
              Log Daily Distance
            </Button>
          </Box>

          <Box mt={4}>
            {showQR && (
              <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
                <QrCode value="Your QR Code Data Here" size={256} />
              </Box>
            )}
          </Box>

          {blockchainVisible && (
            <Box mt={4}>
              <Typography variant="h5"> Transaction in Progress</Typography>
              <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
                <CircularProgress />
              </Box>
              <Box mt={4}>
                <BlockchainVisualization />
              </Box>
            </Box>
          )}

          <Box mt={4} className="map-container">
            <MapContainer center={[13.0827, 80.2707]} zoom={12} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[13.0827, 80.2707]}>
                <Popup>Mountain Bike</Popup>
              </Marker>
              <Marker position={[13.0878, 80.2785]}>
                <Popup>Road Bike</Popup>
              </Marker>
            </MapContainer>
          </Box>
        </Box>
      </Container>
      <Footer />

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={voucherMessage}
      />
    </div>
  );
};

export default Rent;
