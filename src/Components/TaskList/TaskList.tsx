import React from "react";
import Task from "../Task/Task";
import styles from './TaskList.module.css';
import { useSelector } from "react-redux";
import { filteredToDoList } from "../../redux/selectors";

const TaskList:React.FC = () => {

  const filteredToDos = useSelector(filteredToDoList);

  return (
    <ul className={styles.container}>
      {filteredToDos.length
        ?
        filteredToDos.map((item) => {
          return <Task
            task={item}
            key={item.id} />
        })
        : <p className={styles.noTasks}>No tasks</p>
      }
      {filteredToDos.length
        ? <div className={styles.explanations}>
          <p>To edit task use doubleclick on chosen one.</p>
          <p>To save edit of task press Enter, to cancel push mouse somewhere else.</p>
        </div>
        : null}
    </ul>
  );
}

export default TaskList;