import React, { useEffect } from "react";
import Task from "../Task/Task";
import { useSelector } from "react-redux";
import { currentToDoList } from "../../redux/selectors";
import { TaskListWrapper } from "./TaskListWrapper";


const TaskList:React.FC = () => {

  const toDoList = useSelector(currentToDoList);

  return (
    <TaskListWrapper>
      {toDoList.length
        ?
        toDoList.map((item) => {
          return <Task
            task={item}
            key={item._id} />
        })
        : <p className="explanations">No tasks</p>
      }
      {toDoList.length
        ? <p className="explanations">
            To edit task use doubleclick on chosen one. 
            To save edit of task press Enter, to cancel push mouse somewhere else.
          </p>
        : null}
    </TaskListWrapper>
  );
}

export default TaskList;