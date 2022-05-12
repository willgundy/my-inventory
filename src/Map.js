import React, { useState, useEffect } from 'react';
import { getCities } from './services/fetch-utils';
import City from './City';
import ReactMapGL from 'react-map-gl';

export default function Map() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function getCitiesInfo() {
      const cityInfo = await getCities();

      setCities(cityInfo);
    }
    getCitiesInfo();
  }, []);

  console.log(cities);

  return (
    <div>
      {cities.map((city, i) => 
        <City key={i} city={city} />
      )}
    </div>
  );
}
