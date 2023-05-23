import React from "react";
import Task from "../Task/Task";
import { useSelector } from "react-redux";
import { currentToDoList, filteredToDoList } from "../../redux/selectors";
import { TaskListWrapper } from "./TaskListWrapper";


const TaskList:React.FC = () => {

  // const filteredToDos = useSelector(filteredToDoList);
  const filteredToDos = useSelector(currentToDoList);

  return (
    <TaskListWrapper>
      {filteredToDos.length
        ?
        filteredToDos.map((item) => {
          return <Task
            task={item}
            key={item._id} />
        })
        : <p className="explanations">No tasks</p>
      }
      {filteredToDos.length
        ? <p className="explanations">
            To edit task use doubleclick on chosen one. 
            To save edit of task press Enter, to cancel push mouse somewhere else.
          </p>
        : null}
    </TaskListWrapper>
  );
}

export default TaskList;