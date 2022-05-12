import React, { useState, useEffect } from 'react';
import { getCities } from './services/fetch-utils';
import City from './City';

export default function Map() {
  const [cities, setCities] = useState('');

  useEffect(() => {
    async function getCitiesInfo() {
      const cityInfo = await getCities();

      setCities(cityInfo);
    }
    getCitiesInfo();
  }, []);

  return (
    <div>
      {cities.map((city, i) => 
        <City key={i} city={city} />
      )}
    </div>
  );
}
