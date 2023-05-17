import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ToDoType, FilterEnum } from '../types';
import axios from 'axios';
import { API_URL } from '../constants';

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
        id: Date.now(),
      };

      state.toDoList.push(newTask);
      axios.post(API_URL, state.toDoList).then(res => console.log(res.data));
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.toDoList = state.toDoList.filter((t) => t.id !== action.payload);
      axios.post(API_URL, state.toDoList).then(res => console.log(res.data));
    },
    setList: (state, action: PayloadAction<ToDoType[]>) => {
      state.toDoList = action.payload;
    },
    changeStatusTask: (state, action: PayloadAction<number>) => {
      state.toDoList.forEach((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
          // axios.put(`${API_URL}/${action.payload}`, item).then(res => console.log(res.data));
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
          item.title = action.payload.title.trim();
          console.log(item)
          // axios.put(`${API_URL}/${action.payload}`, item).then(res => console.log(res.data));
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
