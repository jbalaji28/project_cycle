import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const LendBike = () => {
  const [bikeDetails, setBikeDetails] = useState({
    brand: '',
    model: '',
    condition: '',
    location: '',
    image: null,
  });
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBikeDetails({ ...bikeDetails, [name]: value });
  };

  const handleImageChange = (e) => {
    setBikeDetails({ ...bikeDetails, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(bikeDetails);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Lend Your Bike
      </Typography>
      <Typography variant="body1" gutterBottom>
        Share your bike with the community and earn rewards.
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField
          fullWidth
          label="Brand"
          name="brand"
          value={bikeDetails.brand}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          required
        />
        <TextField
          fullWidth
          label="Model"
          name="model"
          value={bikeDetails.model}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          required
        />
        <TextField
          fullWidth
          label="Condition"
          name="condition"
          value={bikeDetails.condition}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          required
        />
        <TextField
          fullWidth
          label="Location"
          name="location"
          value={bikeDetails.location}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          required
        />
        <Button
          variant="contained"
          component="label"
          fullWidth
          sx={{ mt: 3 }}
        >
          Upload Bike Picture
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleImageChange}
          />
        </Button>
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
          Submit
        </Button>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Request Processed</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your request is being processed. We will allocate the price based on the bike's condition.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default LendBike;
