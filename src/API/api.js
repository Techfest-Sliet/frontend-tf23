import axios from 'axios';

// export const baseUrl = '';
export const localUrl = 'http://localhost:4000';

export const localUrlIns = axios.create({
  baseURL: localUrl,
  'withCredentials':true,
  headers: {
    'Content-Type': 'application/json',
    'Accept':'application/json',
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "http://localhost:4000",
  },
});