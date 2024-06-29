import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const SearchResults = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [locations, setLocations] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  const simulatedLocations = [
    { name: 'MG Road', lat: 12.9716, lng: 77.5946 },
    { name: 'Brigade Road', lat: 12.9719, lng: 77.5993 },
    { name: 'Lalbagh', lat: 12.9507, lng: 77.5848 },
    { name: 'Cubbon Park', lat: 12.9763, lng: 77.5929 },
  ];

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });

        // Simulate fetching locations within 3 km radius
        const nearbyLocations = simulatedLocations.filter(location => {
          const distance = Math.sqrt(
            Math.pow(location.lat - latitude, 2) + Math.pow(location.lng - longitude, 2)
          );
          return distance <= 0.03; // Roughly 3 km radius
        });

        if (nearbyLocations.length === 0) {
          setOpenDialog(true);
        }

        setLocations(nearbyLocations);
      },
      (error) => {
        console.error('Error fetching location:', error);
      }
    );
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Button variant="contained" color="primary" onClick={() => navigate('/rent-bike')}>Back</Button>
      <Typography variant="h4" component="h1" gutterBottom>
        Nearby Bike Lenders
      </Typography>
      <Typography variant="body1" gutterBottom>
        Below are the available bike lenders near your current location.
      </Typography>
      {currentLocation ? (
        <Box sx={{ mt: 4 }}>
          <MapContainer center={currentLocation} zoom={15} style={{ height: '400px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={currentLocation}>
              <Popup>Your Location</Popup>
            </Marker>
            {locations.map((location, index) => (
              <Marker key={index} position={[location.lat, location.lng]}>
                <Popup>{location.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </Box>
      ) : (
        <Typography variant="body1" gutterBottom>
          Fetching nearby locations...
        </Typography>
      )}

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>No Nearby Bike Lenders Found</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            We couldn't find any bike lenders within a 3 km radius of your current location.
            Please try again later or expand your search radius.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default SearchResults;
