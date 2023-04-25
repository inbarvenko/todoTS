import React, { useState } from "react";
import Button from "../UI/Button/Button";
import InputForm from "../UI/InputForm/InputForm";
import styles from './Task.module.css';
import { useAppDispatch } from "../../redux/store";
import { changeTitleTask, changeStatusTask, removeTask } from "../../redux/toDoList";
import { todoType } from "../../redux/types";

interface TaskProp {
  task: todoType,
}

const Task = (props: TaskProp) => {
  const [edit, setEdit] = useState(false);

  const dispatch = useAppDispatch();

  const editTask = () => {
    setEdit(!edit);
  }

  const changeTitle = (title: string) => {
    if (title) {
      dispatch(changeTitleTask({ id: props.task.id, title }));
    }
    editTask();
  }

  const doneTask = () => {
    dispatch(changeStatusTask(props.task.id));
  }

  const onButtonClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(removeTask(props.task.id));
  }

  return (
    <li className={styles.task}>
      <input
        className={styles.input}
        type="checkbox"
        checked={props.task.done}
        onChange={doneTask} />

      {edit
        ? <InputForm
          taskTitle={props.task.title}
          onClickSave={changeTitle}
          isButtonDisabled={true}
          buttonName="Edit"
        />
        : <>
          <p
            className={`${styles.text} ${props.task.done ? styles.text__done : ''}`}
            onDoubleClick={editTask}
          >
            {props.task.title}
          </p>
        </>}
      <Button
        isButtonDisabled={false}
        onClick={onButtonClick}
        title="Delete"
      />
    </li>
  )
}

export default Task;