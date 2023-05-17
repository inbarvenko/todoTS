import React, { useEffect } from 'react';
import Select from "../UI/Select/Select";
import TaskList from "../TaskList/TaskList";
import { LocalStorageTools } from '../../localStorage';
import { useAppSelector } from '../../redux/hooks';
import { currentFilter } from '../../redux/selectors';
import { TasksWithFilterWrapper } from './TasksWithFilterWrapper';


const TasksWithFilter: React.FC = () => {
  const selectedFilter = useAppSelector(currentFilter);

  useEffect(()=>{
    LocalStorageTools.setItemToLocalStorage('filter', selectedFilter);
  }, [selectedFilter])

  return (
    <TasksWithFilterWrapper>
      <div className="filter">
        <p className="filter__title">
          Filter of Tasks:
        </p>
        <Select
          value={selectedFilter}
        />
      </div>
      <TaskList/>
    </TasksWithFilterWrapper>
  )
}

export default TasksWithFilter;