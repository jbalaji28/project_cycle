import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

const optimizeRoute = async (start, end) => {
  const apiKey = 'usJXG1wC7eeymb3UOZM1';
  const apiUrl = `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[1]},${start[0]};${end[1]},${end[0]}?geometries=geojson&access_token=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    if (response.ok && data.code === 'Ok') {
      return data.routes[0].geometry.coordinates;
    } else {
      throw new Error('Failed to retrieve optimized route.');
    }
  } catch (error) {
    console.error('Error optimizing route:', error);
    return null;
  }
};

// Initialize Leaflet map
const map = L.map('map').setView([51.505, -0.09], 13);

// Add Mapbox Streets tile layer
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: '© <a href="https://www.mapbox.com/">Mapbox</a> contributors',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'YOUR_MAPBOX_ACCESS_TOKEN'
}).addTo(map);

// Example usage to optimize route
const start = [13.0827, 80.2707]; // Guindy
const end = [12.9528, 80.1408]; // Chrompet

optimizeRoute(start, end).then(route => {
  if (route) {
    L.Routing.control({
      waypoints: [
        L.latLng(start[0], start[1]),
        L.latLng(end[0], end[1])
      ],
      routeWhileDragging: true
    }).addTo(map);
  }
});
