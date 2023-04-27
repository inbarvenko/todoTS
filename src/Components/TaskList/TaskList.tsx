import React from "react";
import Task from "../Task/Task";
import { useSelector } from "react-redux";
import { filteredToDoList } from "../../redux/selectors";
import styled from "styled-components";

const Explanations = styled.p`
  margin-top: 20px;

  color: rgb(143, 141, 141);
  font-size: 16px;
  text-align: center;
  overflow-x: auto;
  word-wrap: break-word;

  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;

const Container = styled.ul`
  width: 100%;
  padding: 0;
  padding-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


const TaskList:React.FC = () => {

  const filteredToDos = useSelector(filteredToDoList);

  return (
    <Container>
      {filteredToDos.length
        ?
        filteredToDos.map((item) => {
          return <Task
            task={item}
            key={item.id} />
        })
        : <Explanations>No tasks</Explanations>
      }
      {filteredToDos.length
        ? <Explanations>
            To edit task use doubleclick on chosen one. 
            To save edit of task press Enter, to cancel push mouse somewhere else.
          </Explanations>
        : null}
    </Container>
  );
}

export default TaskList;