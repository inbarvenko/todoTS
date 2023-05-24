import React, { useState } from "react";
import Button from "../UI/Button/Button";
import InputForm from "../UI/InputForm/InputForm";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeStatusTask, changeTitleTask, todolistChanging } from "../../redux/toDoList";
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
    try {
      if (titleTrim) {
        await updateTodo({
          title: titleTrim,
          _id: props.task._id,
          completed: props.task.completed
        });
        dispatch(changeTitleTask({
          _id: props.task._id,
          title: titleTrim
        }));
      }
    }
    catch (err) {
      console.log(`Error! Unable to change title of task! ${err}`);
    }

    editTask();
  }

  const doneTask = async () => {
    try {
      await updateTodo({
        title: props.task.title,
        _id: props.task._id,
        completed: !props.task.completed
      });

      dispatch(changeStatusTask(props.task._id));
    }
    catch (err) {
      console.log(`Error! Unable to change status of task! ${err}`);
    }
  }

  const onButtonClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    try {
      await deleteTodo(props.task._id);
      dispatch(todolistChanging());

    }
    catch (err) {
      console.log(`Error! Unable to delete a task! ${err}`);
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