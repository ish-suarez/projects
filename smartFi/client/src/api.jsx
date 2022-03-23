import axios from 'axios';
const AUTH = 'http://localhost:8000/authenticate';
const SMARTFI = 'http://localhost:9000/smartfi';

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.put["Content-Type"] = "application/json";

const auth = axios.create({baseURL: AUTH});
const userApi = axios.create({baseURL: SMARTFI});

export { auth, userApi }