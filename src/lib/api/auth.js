import client from './client';

export const login = ({ username, password }) =>
  client.post('/auth/login', { username, password });

export const signUp = ({ nickname, username, password, interest }) =>
  client.post('/auth/join', { nickname, username, password, interest });

export const loginCheck = () => client.get('/login-check');
