import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://gateway.marvel.com',
});

export const AUTHENTICATION = {
  ts: '1617861202',
  apikey: 'c32e7f2e175485048b00a29e8b3b4c2b',
  hash: '977d040b6bab779a9a8facadaaf2cb54',
};
