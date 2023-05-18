import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ToDoType, FilterEnum } from '../types';
import axios from 'axios';
import { API_URL } from '../constants';
import { addTodo, deleteTodo, updateTitleTodo } from '../api/todoApi';

type InitialState = {
  toDoList: ToDoType[];
  filter: FilterEnum;
}

const initialState: InitialState = {
  toDoList: [],
  filter: FilterEnum.all,
}

const toDoList = createSlice({
  name: 'ToDoList',
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<FilterEnum>) => {
      state.filter = action.payload;
    },
    addTask: (state, action: PayloadAction<string>) => {
      const titleTrim = action.payload.trim();

      const newTask: ToDoType = {
        userID: 1,
        title: titleTrim,
        completed: false,
        body: '',
        id: Date.now(),
      };

      state.toDoList.push(newTask);
      addTodo(newTask);
      
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.toDoList = state.toDoList.filter((t) => t.id !== action.payload);
      deleteTodo(action.payload);
    },
    setList: (state, action: PayloadAction<ToDoType[]>) => {
      state.toDoList = action.payload;
    },
    changeStatusTask: (state, action: PayloadAction<number>) => {
      state.toDoList.forEach((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
        return item;
      });
    },
    changeTitleTask: (
      state,
      action: PayloadAction<{ id: number; title: string }>
    ) => {
      state.toDoList.forEach((item) => {
        if (item.id === action.payload.id) {
          const newTitle = action.payload.title.trim();
          item.title = newTitle;
          updateTitleTodo(newTitle, item);
        }
        return item;
      });
    },
  }
});

export default toDoList.reducer;
export const {
  changeFilter,
  addTask,
  removeTask,
  setList,
  changeStatusTask,
  changeTitleTask,
} = toDoList.actions;
