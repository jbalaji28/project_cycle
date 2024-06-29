import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const Map = ({ userLocation }) => {
  const mapStyles = {
    height: '400px',
    width: '100%'
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={8}
        center={{ lat: userLocation.latitude, lng: userLocation.longitude }}
      >
        <Marker position={{ lat: userLocation.latitude, lng: userLocation.longitude }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
