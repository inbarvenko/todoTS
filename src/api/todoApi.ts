import { ToDoType } from "../types";

import { axiosInstance } from "./request";

type ResponseTodo = {
  todos: ToDoType[],
  pages: number[],
  activeTasks: number,
}

export const getTodos = async (filter: string, currentPage: number) => {
  const res = await axiosInstance.get<ResponseTodo>('/',
    {
      params: {
        filter,
        currentPage,
      }
    });

    console.log(res.data);
  return res.data;
}

export const addTodo = async (title: string) => {
  const res = await axiosInstance.post<ToDoType[]>('/', { title });
  if (res.statusText === 'OK') return true;
  return false;
}

export const updateTodo = async (item: ToDoType) => {
  const res = await axiosInstance.patch<ToDoType[]>('/', item);
  if (res.statusText === 'OK') return true;
  return false;
}

export const deleteTodo = async (itemID: number) => {
  const res = await axiosInstance.delete<ToDoType[]>('/', {
    data: { _id: itemID },
  });
  if (res.statusText === 'OK') return true;
  return false;
}