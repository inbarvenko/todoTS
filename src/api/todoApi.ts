import { ToDoType } from "../types";

import { axiosInstance } from "./request";

export const getTodos = async () => {
  console.log(axiosInstance);
  const res = await axiosInstance.get<ToDoType[]>('/');
  return res.data;
}

export const addTodo = async (title: string) => {
  const res = await axiosInstance.post<ToDoType[]>('/', {title});
  return res.data;
}

export const updateTitleTodo = async (property: string, item: ToDoType) => {
  const res = await axiosInstance.patch<ToDoType>(`/${item.id}`, {
    ...item,
    title: property,
  });
  return res;
}

export const deleteTodo = async (itemID: number) => {
  const res = await axiosInstance.delete<ToDoType>(`/${itemID}`);
  const todos = await axiosInstance.get<ToDoType[]>('/');
  return todos;
}