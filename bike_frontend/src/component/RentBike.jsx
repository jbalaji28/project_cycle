import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, MenuItem, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const bikeTypes = [
  { value: 'road', label: 'Road Bike' },
  { value: 'mountain', label: 'Mountain Bike' },
  { value: 'hybrid', label: 'Hybrid Bike' },
  { value: 'electric', label: 'Electric Bike' },
];

const RentBike = () => {
  const [searchDetails, setSearchDetails] = useState({
    location: '',
    date: [null, null],
    bikeType: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchDetails({ ...searchDetails, [name]: value });
  };

  const handleDateChange = (newValue) => {
    setSearchDetails({ ...searchDetails, date: newValue });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/search-results');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Rent a Bike
        </Typography>
        <Typography variant="body1" gutterBottom>
          Find a bike to rent and start your journey.
        </Typography>
        <Box component="form" onSubmit={handleSearch} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Location"
                name="location"
                value={searchDetails.location}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateRangePicker
                  startText="Start Date"
                  endText="End Date"
                  value={searchDetails.date}
                  onChange={handleDateChange}
                  renderInput={(startProps, endProps) => (
                    <>
                      <TextField {...startProps} fullWidth margin="normal" variant="outlined" required />
                      <Box sx={{ mx: 2 }}> to </Box>
                      <TextField {...endProps} fullWidth margin="normal" variant="outlined" required />
                    </>
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                label="Bike Type"
                name="bikeType"
                value={searchDetails.bikeType}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                required
              >
                {bikeTypes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
                Search
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default RentBike;
