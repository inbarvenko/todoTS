import React, { useEffect } from 'react';
import styles from './TasksWithFilter.module.css'
import Select from "../UI/Select/Select";
import TaskList from "../TaskList/TaskList";
import { LocalStorageTools } from '../../localStorage';
import { useAppSelector } from '../../redux/hooks';
import { currentFilter } from '../../redux/selectors';


const TasksWithFilter: React.FC = () => {
  const selectedFilter = useAppSelector(currentFilter);

  useEffect(()=>{
    LocalStorageTools.setItemToLocalStorage('filter', selectedFilter);
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