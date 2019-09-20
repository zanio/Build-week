import axios from 'axios';

export const factInstance = axios.create({
  baseURL: 'https://brianiswu-cat-facts-v1.p.rapidapi.com',
});

export const breedInstance = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/breeds',
});
