import axios from "axios";
const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const URL_LOCAL = 'http://localhost:3000/'

export const axiosInstance = axios.create({
  baseURL: API_URL,
});

