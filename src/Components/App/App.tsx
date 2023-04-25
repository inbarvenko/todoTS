import { useMemo, useEffect } from "react";
import InputForm from "../UI/InputForm/InputForm";
import TitleNumber from "../TitleNumber/TitleNumber";
import styles from './App.module.css'
import { useSelector } from "react-redux";
import TasksWithFilter from "../TasksWithFilter/TasksWithFilter";
import { currentToDoList } from "../../redux/selectors";
import { localStorageTools } from "../../localStorage";
import { addTask } from "../../redux/toDoList";
import { useAppDispatch } from "../../redux/store";

const App: React.FC = () => {

  const toDoList = useSelector(currentToDoList);
  const dispatch = useAppDispatch();

  useEffect(() =>
    localStorageTools.setItemToLocalStorage('todo', toDoList),
    [toDoList]);

  const activeTasks = useMemo(() => {
    const arr = toDoList.filter((item: {done: boolean}) => !item.done);
    return arr.length;
  }, [toDoList]);

  const newTask = (title: string) => {
    if (!title.trim()) return;

    dispatch(addTask(title));
  };


  return (
    <div className={styles.components}>
      <TitleNumber
        showText="Сколько задач осталось:"
        showNum={activeTasks}
      />
      <InputForm
        isButtonDisabled={false}
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