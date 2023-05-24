import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ToDoType, FilterEnum } from '../types';

type InitialState = {
  toDoList: ToDoType[];
  filter: FilterEnum;
  pages: number[];
  currentPage: number;
  activeTasks: number;
  changeTodo: boolean;
}

const initialState: InitialState = {
  toDoList: [],
  filter: FilterEnum.all,
  pages: [1],
  currentPage: 1,
  activeTasks: 0,
  changeTodo: false,
}

const toDoList = createSlice({
  name: 'ToDoList',
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<FilterEnum>) => {
      state.filter = action.payload;
    },
    todolistChanging: (state) => {
      state.changeTodo = !state.changeTodo
    },
    setList: (
      state, 
      action: PayloadAction<{ 
        todos: ToDoType[],
         numberOfPages: number[],
         activeTasks: number,
         }>
      ) => {
        state.toDoList = action.payload.todos;
        state.pages = action.payload.numberOfPages;
        state.activeTasks = action.payload.activeTasks;
      },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    changeStatusTask: (state, action: PayloadAction<number>) => {
      state.toDoList.forEach((item) => {
        if (item._id === action.payload) {
          item.completed = !item.completed;
        }
        return item;
      });
    },
    changeTitleTask: (
      state,
      action: PayloadAction<{ _id: number; title: string }>
    ) => {
      state.toDoList.forEach((item) => {
        if (item._id === action.payload._id) {
          item.title = action.payload.title.trim();
        }
        return item;
      });
    },
  }
});

export default toDoList.reducer;
export const {
  changeFilter,
  todolistChanging,
  setCurrentPage,
  setList,
  changeStatusTask,
  changeTitleTask,
} = toDoList.actions;
