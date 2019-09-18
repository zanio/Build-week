import axios from 'axios';

const catInstance = axios.create({
  baseURL: 'https://brianiswu-cat-facts-v1.p.rapidapi.com',
});

export default catInstance;
