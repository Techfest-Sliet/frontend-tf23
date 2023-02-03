import axios from 'axios';

// export const baseUrl = 'https://techfestsliet.org';
export const localUrl = 'http://localhost:4000';

export const localUrlIns = axios.create({
  baseURL: localUrl,
  headers: {
    'Content-Type': 'application/json',
    'Accept':'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});