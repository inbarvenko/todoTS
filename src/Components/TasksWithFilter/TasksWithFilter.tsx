import React, { useEffect } from 'react';
import styles from './TasksWithFilter.module.css'
import Select from "../UI/Select/Select";
import TaskList from "../TaskList/TaskList";
import { useSelector } from 'react-redux';
import { filterEnum } from '../../redux/types';
import { localStorageTools } from '../../localStorage';


const TasksWithFilter: React.FC = () => {
  const selectedFilter = useSelector((state : { todoData: { filter: filterEnum } }) => state.todoData.filter);

  useEffect(()=>{
    localStorageTools.setItemToLocalStorage('filter', selectedFilter);
  }, [selectedFilter])


  return (
    <div className={styles.container}>
      <div className={styles.select}>
        <p className={styles.title}>
          Filter of Tasks:
        </p>
        <Select
          value={selectedFilter}
        />
      </div>
      <TaskList />
    </div>
  )
}

export default TasksWithFilter;