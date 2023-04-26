import { useMemo, useEffect } from "react";
import InputForm from "../UI/InputForm/InputForm";
import TitleNumber from "../TitleNumber/TitleNumber";
import styles from './App.module.css'
import TasksWithFilter from "../TasksWithFilter/TasksWithFilter";
import { currentToDoList } from "../../redux/selectors";
import { LocalStorageTools } from "../../localStorage";
import { addTask } from "../../redux/toDoList";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";

const App: React.FC = () => {

  const toDoList = useAppSelector(currentToDoList);

  const dispatch = useAppDispatch();

  useEffect(() =>
    LocalStorageTools.setItemToLocalStorage('todo', toDoList),
    [toDoList]);

  const activeTasks = useMemo(() => {
    const arr = toDoList.filter((item) => !item.done);
    return arr.length;
  }, [toDoList]);

  const newTask = (title: string) => {
    if (!title.trim()) return;

    dispatch(addTask(title));
  };


  return (
    <div className={styles.components}>
      <TitleNumber
        showText="How many tasks are active:"
        showNum={activeTasks}
      />
      <InputForm
        taskTitle=""
        onClickSave={newTask}
        buttonName="Add"
      />
      <TasksWithFilter
      />
    </div>
  );
}

export default App;