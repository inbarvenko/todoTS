import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { localStorageTools } from '../localStorage';
import todoReducer from './toDoList'


const store = configureStore({
  devTools: true,
  reducer: {
    todoData: todoReducer,
  },
  preloadedState: localStorageTools.getItemFromLocalStorage('todo'),
});

type AppDispatchType = typeof store.dispatch;

export const useAppDispatch: () => AppDispatchType = useDispatch;

export default store;