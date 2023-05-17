import React, { useState } from "react";
import Button from "../UI/Button/Button";
import InputForm from "../UI/InputForm/InputForm";
import { useAppDispatch } from "../../redux/hooks";
import { changeTitleTask, changeStatusTask, removeTask } from "../../redux/toDoList";
import { ToDoType } from "../../types";
import { TaskWrapper } from "./TaskWrapper";


interface Props {
  task: ToDoType;
}

const Task : React.FC<Props> = (props) => {
  const [edit, setEdit] = useState(false);

  const dispatch = useAppDispatch();

  const editTask = () => {
    setEdit(!edit);
  }

  const changeTitle = (title: string) => {
    const titleTrim = title.trim();
    if (titleTrim) {
      dispatch(changeTitleTask({ id: props.task.id, title: titleTrim }));
    }
    editTask();
  }

  const doneTask = () => {
    dispatch(changeStatusTask(props.task.id));
  }

  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    dispatch(removeTask(props.task.id));
  }

  return (
    <TaskWrapper
<<<<<<< HEAD
      isDone={props.task.completed}
=======
      isDone={props.task.done}
>>>>>>> 32a38da79e02ab58e739dd486983c698fa05a467
    >
      <input
        className="input"
        type="checkbox"
        checked={props.task.completed}
        onChange={doneTask} />

      {edit
        ? <InputForm
          taskTitle={props.task.title}
          onClickSave={changeTitle}
          isButtonDisabled={true}
          buttonType="edit"
        />
        : <>
          <p 
            onDoubleClick={editTask}
            className="text">
            {props.task.title}
          </p>
        </>}
      <Button
        onClick={onButtonClick}
        title="Delete"
      />
    </TaskWrapper>
  )
}

export default Task;