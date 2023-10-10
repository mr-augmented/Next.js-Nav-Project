'use client'

import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoic3R1ZGlvYmxvb20iLCJhIjoiY2xua25kaW9pMXUxaDJ2cGVkMWNlN215OCJ9.qlDcSUvdOKv6mM1FwAl_cQ';

function MapComponent() {
    const mapContainer = useRef(null);
    const [longitude, setLongitude] = useState(0);
    const [latitude, setLatitude] = useState(0);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [arObject, setArObject] = useState(null);
  
    useEffect(() => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [0, 0],
        zoom: 1
      });
  
      map.on('click', (e) => {
        const { lng, lat } = e.lngLat;
        setLongitude(lng);
        setLatitude(lat);
      });
  
      return () => {
        map.remove();
      };
    }, []);
  
    return (
      <div className="map-container">
        {/* UI on the left */}
        <div className="ui-container">
          <h2>Set Experience Details</h2>
          <div className="form-group">
            <label htmlFor="longitude">Longitude:</label>
            <br></br>
            <input
              type="number"
              id="longitude"
              value={longitude}
              onChange={(e) => setLongitude(parseFloat(e.target.value))}
            />
          </div>
          <div className="form-group">
            <label htmlFor="latitude">Latitude:</label>
            <br></br>
            <input
              type="number"
              id="latitude"
              value={latitude}
              onChange={(e) => setLatitude(parseFloat(e.target.value))}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <br></br>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <br></br>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Upload Image:</label>
            <br></br>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="form-group">
            <label htmlFor="arObject">Upload AR Object:</label>
            <br></br>
            <input
              type="file"
              id="arObject"
              accept=".obj,.glb"
              onChange={(e) => setArObject(e.target.files[0])}
            />
          </div>
        </div>
        {/* Map on the right */}
        <div ref={mapContainer} className="map"></div>
      </div>
    );
  }
  
  export default MapComponent;