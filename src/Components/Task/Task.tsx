import React, { useState } from "react";
import Button from "../UI/Button/Button";
import InputForm from "../UI/InputForm/InputForm";
import { useAppDispatch } from "../../redux/hooks";
import { changeStatusTask, changeTitleTask, removeTask, setList } from "../../redux/toDoList";
import { ToDoType } from "../../types";
import { TaskWrapper } from "./TaskWrapper";
import { deleteTodo, updateTodo } from "../../api/todoApi";


interface Props {
  task: ToDoType;
}

const Task: React.FC<Props> = (props) => {
  const [edit, setEdit] = useState(false);

  const dispatch = useAppDispatch();

  const editTask = () => {
    setEdit(!edit);
  }

  const changeTitle = async (title: string) => {
    const titleTrim = title.trim();
    if (titleTrim) {
      const requestStatus = await updateTodo({
        title: titleTrim, 
        _id: props.task._id, 
        completed: props.task.completed
      });
      if (requestStatus) {
        dispatch(changeTitleTask({ 
          _id: props.task._id, 
          title: titleTrim 
        }));
      }
    }
    editTask();
  }

  const doneTask = async () => {
    const requestStatus = await updateTodo({
      title: props.task.title, 
      _id: props.task._id, 
      completed: !props.task.completed
    });
    if (requestStatus) {
      dispatch(changeStatusTask(props.task._id));
    }
  }

  const onButtonClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const requestStatus = await deleteTodo(props.task._id);
    if (requestStatus) {
      dispatch(removeTask(props.task._id));
    }
  }

  return (
    <TaskWrapper
      isDone={props.task.completed}
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