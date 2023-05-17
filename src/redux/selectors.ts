import { createSelector } from "reselect";
import { FilterEnum } from "../types";
import { RootState } from "./hooks";

export const  currentToDoList = (state : RootState) => state.todoData.toDoList;

export const currentFilter = (state : RootState) => state.todoData.filter;

 
export const filteredToDoList = createSelector(
  [currentToDoList, currentFilter],
  (todo, filter) => {
    switch (filter) {
      case FilterEnum.active:
        return todo.filter((item) => !item.completed);
      case FilterEnum.completed:
        return todo.filter((item) => item.completed);
      default:
        return todo;
    }
  }
)