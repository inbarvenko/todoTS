import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { localStorageTools } from '../localStorage';
import todoReducer from './toDoList'
import { filterEnum } from '../types';


const store = configureStore({
  devTools: true,
  reducer: {
    todoData: todoReducer,
  },
  preloadedState: {
    todoData: {
      toDoList: localStorageTools.getItemFromLocalStorage('todo', []),
      filter: localStorageTools.getItemFromLocalStorage('filter', filterEnum.all)
    }
  },
});

type AppDispatchType = typeof store.dispatch;

export const useAppDispatch: () => AppDispatchType = useDispatch;

export default store;