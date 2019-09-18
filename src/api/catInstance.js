import axios from 'axios';

const catInstance = axios.create({
    baseURL:`http://catfact.ninja`
});

export default catInstance;