import { client } from './client';

export function getUser() {
  return client.auth.session();
}

export async function signIn(email, password) {
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function signUp(email, password) {
  const response = await client.auth.signUp({ email, password });
  
  return response.user;
}

export async function logout() {
  await client.auth.signOut();

  return window.location.href = '../';
}

export async function getCities() {
  const { body } = await client
    .from('cities')
    .select('*');
    
  return body;
}

export async function getCity(id) {
  const { body } = await client
    .from('cities')
    .select('*')
    .match({ id: id })
    .single();
      
  return body;
}

export async function createCity(city) {
  const { body } = await client
    .from('cities')
    .insert([city]);
      
  return body;
}


export async function updatecity(city) {
  const { body } = await client
    .from('cities')
    .update([city])
    .match({ id: city.id })
    .single();
        
  return body;
}