import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import L from 'leaflet';
import 'leaflet-control-geocoder';
import io from 'socket.io-client';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Import the Footer.css file for styling

const socket = io('http://localhost:5000'); // Replace with your backend URL
const openRouteServiceApiKey = '5b3ce3597851110001cf62480f26f659af96410f8fa74512396aabdc'; // Replace with your OpenRouteService API key

const ManageProducts = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [endLocation, setEndLocation] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [error, setError] = useState(null);

  const trackUserLocation = () => {
    navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
        // Send user's location to the backend
        socket.emit('updateLocation', { userId: 'uniqueUserId', latitude, longitude });
      },
      (error) => {
        setError(error.message);
        console.error('Error getting user location:', error);
      }
    );
  };

  useEffect(() => {
    // Listen for location updates from the backend
    socket.on('locationUpdate', (updatedUserLocation) => {
      setUserLocation(updatedUserLocation);
    });

    return () => {
      socket.off('locationUpdate');
    };
  }, []);

  const handleEndLocationSelect = async (e) => {
    const latlng = e.geocode.center;
    setEndLocation({ lat: latlng.lat, lng: latlng.lng });
    // Fetch route from user's location to end location
    await fetchRoute(userLocation, { lat: latlng.lat, lng: latlng.lng });
  };

  const fetchRoute = async (start, end) => {
    try {
      const response = await fetch(`https://api.openrouteservice.org/v2/directions/driving-car?api_key=${openRouteServiceApiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'coordinates': [[start.lng, start.lat], [end.lng, end.lat]]
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch route: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Route data:', data);
      // Extract coordinates from the first feature in the response
      const routeCoordinates = data.features[0].geometry.coordinates;
      // Ensure coordinates are in [latitude, longitude] format
      const formattedCoordinates = routeCoordinates.map(coord => [coord[1], coord[0]]);
      setRouteCoordinates(formattedCoordinates);
      setError(null); // Clear any previous errors
    } catch (error) {
      setError(error.message);
      console.error('Error fetching route:', error);
    }
  };

  return (
    <div>
      {/* Navigation Bar */}
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="/">Bikes2Ride</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/about">ABOUT</Nav.Link>
            <Nav.Link href="/bike-rental">BIKE RENTAL</Nav.Link>
            <Nav.Link href="/ride-like-a-local">RIDE LIKE A LOCAL</Nav.Link>
            <Nav.Link href="/rentals">RENTALS</Nav.Link>
            <Nav.Link href="/tours">TOURS</Nav.Link>
            <Nav.Link href="/blog">BLOG</Nav.Link>
            <Nav.Link href="/contacts">CONTACTS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Main Content */}
      <div>
        <h2>Manage Products</h2>
        <div>
          <h3>User Tracker</h3>
          <button onClick={trackUserLocation}>Track User Location</button>
          {error && <p style={{ color: 'red' }}>Error: {error}</p>}
          {userLocation && (
            <div style={{ height: '600px', width: '100%' }}>
              <MapContainer center={[userLocation.lat, userLocation.lng]} zoom={12} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                  url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}" // Example of Google Maps satellite imagery
                  attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a>'
                  maxZoom={20}
                  subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
                />
                <Marker position={[userLocation.lat, userLocation.lng]}>
                  <Popup>
                    Your current location. <br /> Latitude: {userLocation.lat}, Longitude: {userLocation.lng}
                  </Popup>
                </Marker>
                {endLocation && (
                  <Marker position={[endLocation.lat, endLocation.lng]}>
                    <Popup>
                      End location. <br /> Latitude: {endLocation.lat}, Longitude: {endLocation.lng}
                    </Popup>
                  </Marker>
                )}
                {routeCoordinates.length > 0 && <Polyline positions={routeCoordinates} color="blue" />}
                <LeafletGeocoderControl onSelect={handleEndLocationSelect} />
              </MapContainer>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Custom component to add Leaflet geocoder control
const LeafletGeocoderControl = ({ onSelect }) => {
  const map = useMap();

  useEffect(() => {
    const geocoder = L.Control.geocoder({
      collapsed: false,
      placeholder: 'Search for a location',
      geocoder: new L.Control.Geocoder.Nominatim(),
      defaultMarkGeocode: false,
    })
      .on('markgeocode', function (e) {
        onSelect(e);
      })
      .addTo(map);

    return () => map.removeControl(geocoder);
  }, [map, onSelect]);

  return null;
};

// Footer component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5 className="footer-heading">Contact Information</h5>
            <p className="footer-info">123 Street Name, City, Country</p>
            <p className="footer-info">Email: example@example.com</p>
            <p className="footer-info">Phone: +123 456 7890</p>
          </div>
          <div className="col-md-6 d-flex justify-content-end align-items-center">
            <h5 className="footer-heading mr-3">Follow Us</h5>
            <ul className="social-icons list-inline">
              <li className="list-inline-item"><a href="#"><FaFacebook /></a></li>
              <li className="list-inline-item"><a href="#"><FaTwitter /></a></li>
              <li className="list-inline-item"><a href="#"><FaInstagram /></a></li>
            </ul>
            <p className="footer-text ml-3 mb-0">© 2024 Bikes2Ride. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ManageProducts;
