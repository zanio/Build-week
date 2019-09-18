import axios from 'axios';

const catInstance = axios.create({
  baseURL: 'https://catfact.ninja',
});

export default catInstance;
