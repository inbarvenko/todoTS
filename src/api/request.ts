import axios from "axios";
import { ToDoType } from "../types";
const API_URL = 'https://jsonplaceholder.typicode.com/users/1/todos';

// const firstApiAxios = axios.create({
//   baseURL:API_URL,
// })

export const getTodos = async () => {
  try {
    const res = await axios.get<ToDoType[]>( `${API_URL}`);
    console.log(res.data);
  } catch (error) {
    if(axios.isAxiosError(error)){
      console.log(error.message);
    }
  }
};


