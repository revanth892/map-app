import React, { useEffect } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

const Map = () => {
  useEffect(() => {
    // Set your Mapbox access token
    mapboxgl.accessToken = 'pk.eyJ1IjoicmV2YW50aDciLCJhIjoiY20xYzAybmZwMjIzcDJrczg3YTVtNG9oNiJ9.nAC1y1ZAOm99nKS8OxY1gA';

    // Create a new map instance
    const map = new mapboxgl.Map({
      container: 'map', // The ID of the div where the map will be rendered
      style: 'mapbox://styles/revanth7/cm1c4ybd402f801pjf57i2gwz', // Your Mapbox style URL
      center: [79.088860, 21.146633], // Starting position [lng, lat]
      zoom: 10.7, // Starting zoom level
    });

    // Cleanup on unmount
    return () => map.remove();
  }, []);

  return (
    <div>
      <div id="map" style={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }} />
    </div>
  );
};

export default Map;