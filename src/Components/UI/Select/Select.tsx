import React from "react";
import styles from './Select.module.css'
import { FILTER_OPTIONS } from "../../../constants";
import { FilterEnum } from "../../../types";
import { useAppDispatch } from "../../../redux/hooks";
import { changeFilter } from "../../../redux/toDoList";

interface Props {
  value: FilterEnum;
}

const Select: React.FC<Props> = (props) => {

  const dispatch = useAppDispatch();

  const stringToFilterEnum = (str: string) => {
    switch (str) {
      case FilterEnum.active:
        return dispatch(changeFilter(FilterEnum.active));
      case FilterEnum.completed:
        return dispatch(changeFilter(FilterEnum.completed));
      default:
        return dispatch(changeFilter(FilterEnum.all));
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