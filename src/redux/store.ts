import { configureStore } from '@reduxjs/toolkit';
import { LocalStorageTools } from '../localStorage';
import todoReducer from './toDoList'
import { FilterEnum, ToDoType } from '../types';
import { getTodos } from '../api/request';

const store = configureStore({
  devTools: true,
  reducer: {
    todoData: todoReducer,
  },
  preloadedState: {
    todoData: {
      toDoList: getTodos(),
      filter: LocalStorageTools.getItemFromLocalStorage('filter', FilterEnum.all)
    }
  },
  // preloadedState: {
  //   todoData: {
  //     toDoList: LocalStorageTools.getItemFromLocalStorage('todo', []),
  //     filter: LocalStorageTools.getItemFromLocalStorage('filter', FilterEnum.all)
  //   }
  // },
});


export default store;