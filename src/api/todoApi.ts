import { ToDoType } from "../types";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstance } from "./request";

type ResponseTodo = {
  todos: ToDoType[],
  pages: number[],
  activeTasks: number,
}

type Params = {
  filter: string,
  currentPage: number,
}

export const getTodos = createAsyncThunk('todos/getTodos',
  async (arg: Params, thunkAPI) => {
    const res = await axiosInstance.get<ResponseTodo>('/',
      {
        params: {
          filter: arg.filter,
          currentPage: arg.currentPage,
        }
      });
    return res?.data;
  }
)

export const addTodo = (title: string) => {
  console.log(title)
  return axiosInstance.post<ToDoType>('/', { title });
}

export const updateTodo = (item: ToDoType) => {
  return axiosInstance.put<ToDoType>('/', 
    {item:
      {
        id: item._id,
        title: item.title,
        completed: item.completed
      }
    }
  );
}

export const deleteTodo = (itemID: number) => {
  console.log(itemID)
  return axiosInstance.delete<ToDoType>('/', {
    data: { id: itemID },
  });
}