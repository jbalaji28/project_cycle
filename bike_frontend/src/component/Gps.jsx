import React, { useState, useEffect } from 'react';

const GPSExample = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    // Check if geolocation is available
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error('Error getting geolocation:', error);
        }
      );
    } else {
      console.error('Geolocation is not available.');
    }
  }, []);

  return (
    <div>
      {latitude && longitude ? (
        <div>
          <h2>Latitude: {latitude}</h2>
          <h2>Longitude: {longitude}</h2>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GPSExample;
