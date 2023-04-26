import { createSelector } from "reselect";
import { todoType, filterEnum } from "../types";

export const  currentToDoList = (state : { todoData: { toDoList: todoType[] } }) => state.todoData.toDoList;

export const currentFilter = (state : { todoData: { filter: string } }) => state.todoData.filter;

 
export const filteredToDoList = createSelector(
  [currentToDoList, currentFilter],
  (todo, filter) => {
    switch (filter) {
      case filterEnum.active:
        return todo.filter((item: {done: boolean}) => !item.done);
      case filterEnum.completed:
        return todo.filter((item: {done: boolean}) => item.done);
      default:
        return todo;
    }
  }
)