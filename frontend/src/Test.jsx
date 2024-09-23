// MapComponent.jsx
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import geojsonData from './assets/test.json';

mapboxgl.accessToken = 'pk.eyJ1IjoicmV2YW50aDciLCJhIjoiY20xYzAybmZwMjIzcDJrczg3YTVtNG9oNiJ9.nAC1y1ZAOm99nKS8OxY1gA';

const MapComponent = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11', // Choose a style
      center: [79.08886, 21.146633], // Initial center
      zoom: 10, // Initial zoom level
    });

    map.on('load', () => {
      map.addSource('geojson-data', {
        type: 'geojson',
        data: geojsonData,
      });

      // Adding a layer for point features
      map.addLayer({
        id: 'points-layer',
        type: 'circle',
        source: 'geojson-data',
        filter: ['==', '$type', 'Point'],
        paint: {
          'circle-radius': 5,
          'circle-color': '#007cbf',
        },
      });

      // Adding a layer for line features
      map.addLayer({
        id: 'lines-layer',
        type: 'line',
        source: 'geojson-data',
        filter: ['==', '$type', 'LineString'],
        paint: {
          'line-width': 2,
          'line-color': '#ff7f00',
        },
      });

      // Adding a layer for polygon features
      map.addLayer({
        id: 'polygons-layer',
        type: 'fill',
        source: 'geojson-data',
        filter: ['==', '$type', 'Polygon'],
        paint: {
          'fill-color': '#008000',
          'fill-opacity': 0.5,
        },
      });
    });

    return () => map.remove();
  }, []);

  return <div ref={mapContainerRef} className="map-container" style={{ width: '100%', height: '500px' }} />;
};

export default MapComponent;

