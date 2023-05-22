import { ToDoType } from "../types";

import { axiosInstance } from "./request";



export const getTodos = async (filter: string) => {
  const res = await axiosInstance.get<ToDoType[]>('/',
    {
      params: { 
        filter, 
      }
    });
  return res.data;
}

export const addTodo = async (title: string) => {
  const res = await axiosInstance.post<ToDoType[]>('/', { title });
  if(res.statusText === 'OK') return true;
  return false;
}

export const updateTodo = async (item: ToDoType) => {
  const res = await axiosInstance.patch<ToDoType[]>('/', item);
  if(res.statusText === 'OK') return true;
  return false;
}

export const deleteTodo = async (itemID: number) => {
  const res = await axiosInstance.delete<ToDoType[]>('/', {
    data: { _id: itemID },
  });
  if(res.statusText === 'OK') return true;
  return false;
}