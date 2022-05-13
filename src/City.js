import React from 'react';
import { Link } from 'react-router-dom';


export default function City({ city }) {
  return (
    <Link className='cityCard' to={`/city/${city.id}`}>
      <h2>{city.name}</h2>
      <h4>{city.state}</h4>
      <h4>{city.pop}</h4>
    </Link>
  );
}
