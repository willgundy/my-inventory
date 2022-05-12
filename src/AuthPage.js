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
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
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
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
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
