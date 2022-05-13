import React, { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils';

export default function AuthPage({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();

    const user = await signIn(email, password);

    setUser(user);
  }

  async function handleSignUp(e) {
    e.preventDefault();

    const user = await signUp(email, password);

    setUser(user);
  }

  return (
    <div className='flex-column-centered auth-page'>
      <h1>City Tracker</h1>
      <form onSubmit={handleSignIn} className='auth'>
        <h2>Sign In</h2>
        <label>
          Email:
          <input required type={'email'} onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input required type={'password'} onChange={e => setPassword(e.target.value)} />
        </label>
        <button>Sign In</button>
      </form>
      <form onSubmit={handleSignUp} className='auth'>
        <h2>Sign Up</h2>
        <label>
          Email:
          <input required type={'email'} onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input required type={'password'} onChange={e => setPassword(e.target.value)} />
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
}
