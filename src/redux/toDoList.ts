import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { todoType, filterEnum } from './types';
import { localStorageTools } from "../localStorage";

const initialState = {
  toDoList: [] as todoType[],
  filter: filterEnum.all,
  // filter: localStorageTools.getItemFromLocalStorage('filter'),
  // toDoList: localStorageTools.getItemFromLocalStorage('todo'),
}

const toDoList = createSlice({
  name: 'ToDoList',
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<filterEnum>) => {
      state.filter = action.payload;
    },
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: todoType = {
        title: action.payload,
        done: false,
        id: Date.now(),
      };

      state.toDoList.push(newTask);
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.toDoList = state.toDoList.filter((t) => t.id !== action.payload);
    },
    changeStatusTask: (state, action: PayloadAction<number>) => {
      state.toDoList.forEach((item) => {
        if (item.id === action.payload) {
          item.done = !item.done;
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
          item.title = action.payload.title;
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
  changeStatusTask,
  changeTitleTask,
} = toDoList.actions;
