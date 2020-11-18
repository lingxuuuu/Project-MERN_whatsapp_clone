import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:9000' //where express.js is running, and you can find on server.js
})

export default instance;