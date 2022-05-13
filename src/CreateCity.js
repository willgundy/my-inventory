import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createCity } from './services/fetch-utils';
import { states } from './state-data';

export default function CreateCity() {
  const history = useHistory();
  const [cityInForm, setCityInForm] = useState({
    name: '',
    state: 'OR - Oregon',
    coolThings: {},
    lat: 0,
    long: 0, 
    pop: 0
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await createCity(cityInForm);
    history.push('/map');
  }

  return (
    <div className='flex-column-centered'>
      <form onSubmit={handleSubmit}>
        <h1>Add a City</h1>
        <label>
          City Name:
          <input required onChange={(e) => setCityInForm({ ...cityInForm, name: e.target.value })} />
        </label>
        <label>
          State:
          <select required value={cityInForm.state}
            onChange={(e) => setCityInForm({ ...cityInForm, state: e.target.value })}
          >
            {states.map((state, i) => <option key={i} value={state}>{state}</option>)}
          </select>
        </label>
        <label>
          Lat:
          <input required type="number" step="0.01" onChange={(e) => setCityInForm({ ...cityInForm, lat: e.target.value })}/>
        </label>
        <label>
          Long:
          <input required type="number" step="0.01" onChange={(e) => setCityInForm({ ...cityInForm, long: e.target.value })}/>
        </label>
        <label>
          Population:
          <input required onChange={(e) => setCityInForm({ ...cityInForm, pop: e.target.value })}/>
        </label>
        <button>Create City</button>
      </form>
    </div>
  );
}
