import { ToDoType } from "../types";

import { axiosInstance } from "./request";

export const getTodos = async () => {
  const res = await axiosInstance.get<ToDoType[]>('/');
  return res.data;
}

export const addTodo = async (title: string) => {
  const res = await axiosInstance.post<ToDoType[]>('/', {title});
  return res.data;
}

export const updateTodo = async (newTitle: string, itemID: number, completed: boolean) => {
  const res = await axiosInstance.patch<ToDoType[]>('/', {
    _id: itemID,
    title: newTitle,
    completed,
  });
  return res.data;
}

export const deleteTodo = async (itemID: number) => {
  const res = await axiosInstance.delete<ToDoType[]>('/', {
    data: { _id: itemID },
  });
  console.log(res.data);
  return res.data;
}