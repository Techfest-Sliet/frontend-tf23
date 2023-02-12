import axios from 'axios';

export const baseUrl = 'https://api.techfestsliet.com';
//export const baseUrl = 'http://localhost:4000';

export const localUrlIns = axios.create({
  baseURL: baseUrl,
  'withCredentials':true,
  headers: {
    'Content-Type': 'application/json',
    'Accept':'application/json',
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": baseUrl,
  },
});
