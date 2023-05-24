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

  return res.data;
}

export const addTodo = (title: string) => {
  return axiosInstance.post<ToDoType>('/', { title });
}

export const updateTodo = (item: ToDoType) => {
 return axiosInstance.patch<ToDoType>('/', item);
}

export const deleteTodo = (itemID: number) => {
  return axiosInstance.delete<ToDoType>('/', {
    data: { _id: itemID },
  });
}