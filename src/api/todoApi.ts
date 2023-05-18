import { ToDoType } from "../types";
import { axiosInstance } from "./request";

export const getTodos = async () => {
  const res = await axiosInstance.get<ToDoType[]>('/');
  return res.data;
}

export const addTodo = async (item: ToDoType) => {
  const res = await axiosInstance.post<ToDoType>('/', {...item});
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
  return res;
}