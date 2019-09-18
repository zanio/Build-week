import axios from 'axios';

const catInstance = axios.create({
  baseURL: 'https://propertpro-lite.herokuapp.com',
});

export default catInstance;
