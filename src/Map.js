import React, { useState, useEffect } from 'react';
import { getCities } from './services/fetch-utils';
import City from './City';
// import ReactMapGL from 'react-map-gl';

export default function Map() {
  const [cities, setCities] = useState([]);
// //   const [viewport, setViewport] = useState({
//     latitude: 39.8283,
//     longitue: 98.5795,
//     zoom: 10,
//     width: '100vw',
//     height: '100vh'
//   });

  useEffect(() => {
    async function getCitiesInfo() {
      const cityInfo = await getCities();

      setCities(cityInfo);
    }
    getCitiesInfo();
  }, []);


  return (
    // <ReactMapGL 
    //   {...viewport}
    //   mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    // >
    // </ReactMapGL>
    <div className='flex-row-centered'>
      {cities.map((city, i) => 
        <City key={i} city={city} />
      )}
    </div>
  );
}
