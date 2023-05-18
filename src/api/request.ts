import axios from "axios";
const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const URL_LOCAL = 'http://localhost:4000/todos'

export const axiosInstance = axios.create({
  baseURL: URL_LOCAL,
});

