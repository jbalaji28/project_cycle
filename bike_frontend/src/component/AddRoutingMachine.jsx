const AddRoutingMachine = () => {
  const map = useMap();

  useEffect(() => {
    if (userLocation) {
      const waypoints = [
        L.latLng(userLocation[0], userLocation[1]),
        ...cycleStationLocations.map(station => L.latLng(station.coords)),
      ];

      const routingControl = L.Routing.control({
        waypoints,
        routeWhileDragging: true,
        createMarker: function() { return null; }, // Optionally, if you want to remove the default markers
        lineOptions: {
          styles: [{ color: '#6FA1EC', weight: 4 }] // Customize line style as needed
        },
        show: false, // Hide the instructions
        // Custom method to hide instructions container
        createGeocoders: false
      }).addTo(map);

      // Add CSS to hide instructions container
      L.DomUtil.addClass(routingControl.getContainer(), 'hide-instructions');

      return () => map.removeControl(routingControl);
    }
  }, [userLocation, map]);

  return null;
};
