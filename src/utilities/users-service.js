import * as usersAPI from './users-api';

export async function signUp(userData) {
  // Delegate the request to the users-api
  // which will ultimatelly return a JSON Web Token (JWT)
  const token = await usersAPI.signUp(userData);
  // Persist the token 
  localStorage.setItem('token', token);
  return getUser();
}

export async function login(credentials) {
  // Delegate the request to the users-api
  // which will ultimatelly return a JSON Web Token (JWT)
  const token = await usersAPI.login(credentials);
  // Persist the token 
  localStorage.setItem('token', token);
  return getUser();
}

export function logOut() {
  localStorage.removeItem('token');
}

// Return the token if valid, otherwise return null
export function getToken() {
  const token = localStorage.getItem('token');
  if (!token) return null;
  // Obtain the payload of the token
  // so that we can check if it's expired
  const payload = JSON.parse(atob(token.split('.')[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export function checkToken() {
  return usersAPI.checkToken()
    .then(dateStr => new Date(dateStr));
}