import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import styles from  '../styles/Mapbox.module.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiYXVnbWVudGVkcmVhbGl0eSIsImEiOiJjbDZ5YmZyeXkyd3IxM2RvYWZkbXNwY21sIn0.YeCen0oCCFAYTyqeIhAK5g';



function MapBox({ setLongitude, setLatitude }) {
    const mapContainer = useRef(null);
    const markerRef = useRef(null);
  
    useEffect(() => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-118.45, 33.98],
        zoom: 14,
        pitch: 60,
      });
  
      const customMarker = document.createElement('div');
      customMarker.style.backgroundImage = 'url(/images/pillar.png)';
      customMarker.style.width = '12vh';
      customMarker.style.height = '12vh';
      customMarker.style.backgroundSize = 'cover';
  
      const marker = new mapboxgl.Marker(customMarker, { draggable: true })
        .setLngLat([-118.45, 33.98])
        .addTo(map);
  
      marker.on('dragend', () => {
        const lngLat = marker.getLngLat();
        setLongitude(lngLat.lng);
        setLatitude(lngLat.lat);
      });
  
      markerRef.current = marker;
  
      map.on('move', () => {
        const lngLat = marker.getLngLat();
        const bounds = map.getBounds();
  
        if (!bounds.contains(lngLat)) {
          const newLngLat = new mapboxgl.LngLat(
            Math.min(Math.max(lngLat.lng, bounds.getWest()), bounds.getEast()),
            Math.min(Math.max(lngLat.lat, bounds.getSouth()), bounds.getNorth())
          );
          marker.setLngLat(newLngLat);
          setLongitude(newLngLat.lng);
          setLatitude(newLngLat.lat);
        }
      });
  
      return () => {
        map.remove();
      };
    }, [setLongitude, setLatitude]);
  
    return <div ref={mapContainer} className={styles['map']}></div>;
  }
  
  export default MapBox;