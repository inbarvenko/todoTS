import React, { useState } from "react";
import Button from "../UI/Button/Button";
import InputForm from "../UI/InputForm/InputForm";
import { useAppDispatch } from "../../redux/hooks";
import { changeTitleTask, changeStatusTask, removeTask } from "../../redux/toDoList";
import { ToDoType } from "../../types";
import styled, {css} from "styled-components";

const TaskStyled = styled.li`
  width: 100%;
    
  padding-bottom: 15px;
  padding-top: 15px;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content:center;
  overflow: hidden;

  flex: 1 auto;
`;

const InputStyled = styled.input`
  margin-left: 15px;
  margin-right: 15px;

  min-width: 20px;
  min-height: 20px;
  cursor: pointer;

  box-shadow: 0 3px 3px rgba(0,0,0,0.15);

  @media screen and (max-width: 400px) {
    min-width: 15px;
    min-height: 15px;
  }
`;

const TextStyled = styled.p<{task: ToDoType}>`
  text-align: center;
  flex-grow: 1;
  overflow-x: auto;
  word-wrap: break-word;

  ${props => props.task.done && css`
    color: grey;
    text-decoration: line-through;
  `}
`;


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
    <TaskStyled>
      <InputStyled
        type="checkbox"
        checked={props.task.done}
        onChange={doneTask} />

      {edit
        ? <InputForm
          taskTitle={props.task.title}
          onClickSave={changeTitle}
          isButtonDisabled={true}
          buttonType="edit"
        />
        : <>
          <TextStyled
            task={props.task}
            onDoubleClick={editTask}
          >
            {props.task.title}
          </TextStyled>
        </>}
      <Button
        onClick={onButtonClick}
        title="Delete"
      />
    </TaskStyled>
  )
}

export default Task;