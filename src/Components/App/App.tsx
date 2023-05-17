import { useMemo, useEffect, useState } from "react";
import InputForm from "../UI/InputForm/InputForm";
import TitleNumber from "../TitleNumber/TitleNumber";
import TasksWithFilter from "../TasksWithFilter/TasksWithFilter";
import { currentToDoList } from "../../redux/selectors";
import { addTask, setList } from "../../redux/toDoList";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { AppGlobalStyle, AppWrapper } from "./AppWrapper";
import '../../styles/imports.css';
import { ThemeProvider } from "styled-components";
import { myTheme } from "../../styles/theme";
import axios from "axios";
import { API_URL } from "../../constants";

const App: React.FC = () => {

  const toDoList = useAppSelector(currentToDoList);
  const [person, setPerson] = useState('1');
  const dispatch = useAppDispatch();

  useEffect(() => {
    let ignore = false;
    axios
      .get(API_URL)
      .then((result) => {
        if (!ignore) {
          const data = result.data;
          dispatch(setList(data));
        }
      })
      .catch( (error) => {
        console.log(error);
      });

      return () => {
        ignore = true;
      };
    }, [person]);

  const activeTasks = useMemo(() => {
    const arr = toDoList.filter((item) => !item.completed);
    return arr.length;
  }, [toDoList]);

  const newTask = (title: string) => {
    if (!title.trim()) return;

    dispatch(addTask(title));
  };


  return (
    <ThemeProvider theme={myTheme}>
      <AppGlobalStyle />
      <div className="global__container">
        <h2 className="global__title">ToDo list</h2>
        <AppWrapper>
          <TitleNumber
            showText="How many tasks are active:"
            showNum={activeTasks}
          />
          <InputForm
            taskTitle=""
            onClickSave={newTask}
            buttonName="Add"
          />
          <TasksWithFilter />
        </AppWrapper>
      </div>
    </ThemeProvider>
  );
}

export default App;