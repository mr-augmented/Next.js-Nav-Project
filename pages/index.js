import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';

const Mapbox = dynamic(() => import('../components/Mapbox'), {
  ssr: false,
});

const MapUI = dynamic(() => import('../components/MapUI'), {
  ssr: false,
});

function HomePage() {
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);

  return (
    <div>
      <MapUI 
        longitude={longitude} 
        setLongitude={setLongitude} 
        latitude={latitude} 
        setLatitude={setLatitude} 
      />
      <Mapbox 
        setLongitude={setLongitude} 
        setLatitude={setLatitude} 
      />
    </div>
  );
}

export default HomePage;
