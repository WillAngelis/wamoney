import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://wamoney.netlify.app/api',
});
