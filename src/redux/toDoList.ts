import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ToDoType, FilterEnum } from '../types';

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
    setList: (state, action: PayloadAction<ToDoType[]>) => {
      state.toDoList = action.payload;
    },
  }
});

export default toDoList.reducer;
export const {
  changeFilter,
  setList,
} = toDoList.actions;
