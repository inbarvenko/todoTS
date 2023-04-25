import React from "react";
import styles from './Select.module.css'
import { FILTER_OPTIONS } from "../../../constants";
import { filterEnum } from "../../../redux/types";
import { useAppDispatch } from "../../../redux/store";
import { changeFilter } from "../../../redux/toDoList";

interface SelectProps {
  value: filterEnum,
}

function Select(props: SelectProps) {

  const dispatch = useAppDispatch();

  const stringToFilterEnum = (str: string) => {
    switch (str){
      case filterEnum.active:
        return dispatch(changeFilter(filterEnum.active));
      case filterEnum.completed:
        return dispatch(changeFilter(filterEnum.completed));
      default:
        return dispatch(changeFilter(filterEnum.all)); 
    }
  }

  return (
    <select
      className={styles.selector}
      value={props.value}
      onChange={(e) => stringToFilterEnum(e.target.value)}
    >
      {FILTER_OPTIONS.map((option) => {
        return <option
          key={option.value}
          value={option.value}
        >
          {option.name}
        </option>
      })}
    </select>
  );
}

export default Select;