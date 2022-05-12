import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { updateCity, getCity } from './services/fetch-utils';
import { states } from './state-data';

export default function CityPage() {
  const { id } = useParams();
  const history = useHistory();
  const [cityInForm, setCityInForm] = useState({
    id: id,
    name: '',
    state: '',
    coolThings: {},
    lat: 0,
    long: 0, 
    pop: 0
  });

  useEffect(() => {
    async function getCityInfo() {
      const cityInfo = await getCity(id);

      setCityInForm(cityInfo);
    }
    getCityInfo();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    await updateCity(cityInForm);
    history.push('/map');
  }

  return (
    <div className='createCity'>
      <form onSubmit={handleSubmit}>
        <h1>Edit Info for {cityInForm.name}</h1>
        <label>
        City Name:
          <input required value={cityInForm.name} onChange={(e) => setCityInForm({ ...cityInForm, name: e.target.value })} />
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
          <input required value={cityInForm.lat} type="number" step="0.01" onChange={(e) => setCityInForm({ ...cityInForm, lat: e.target.value })}/>
        </label>
        <label>
        Long:
          <input required value={cityInForm.long} type="number" step="0.01" onChange={(e) => setCityInForm({ ...cityInForm, long: e.target.value })}/>
        </label>
        <label>
        Population:
          <input required value={cityInForm.pop} onChange={(e) => setCityInForm({ ...cityInForm, pop: e.target.value })}/>
        </label>
        <button>Update Info</button>
      </form>
    </div>
  );
}