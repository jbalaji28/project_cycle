import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const MapComponent = () => {
  const [recommendedRoute, setRecommendedRoute] = useState(null);

  useEffect(() => {
    // Function to fetch route recommendation from AI backend
    const fetchRouteRecommendation = async () => {
      try {
        // Replace 'AI_BACKEND_URL' with the URL of your AI backend endpoint for route recommendation
        const response = await fetch('AI_BACKEND_URL', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            start: { latitude: 51.505, longitude: -0.09 }, // Example start point
            end: { latitude: 51.51, longitude: -0.1 }, // Example end point
            preferences: {
              fastestRoute: true,
              scenicRoute: false,
              // Add other preferences as needed
            },
          }),
        });
        const data = await response.json();
        setRecommendedRoute(data.route);
      } catch (error) {
        console.error('Error fetching route recommendation:', error);
      }
    };

    fetchRouteRecommendation();
  }, []); // Run once on component mount

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {recommendedRoute && (
        <Polyline
          positions={recommendedRoute.coordinates.map(coord => [coord.latitude, coord.longitude])}
          color="blue"
        />
      )}
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
