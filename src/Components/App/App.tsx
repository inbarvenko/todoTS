import { useMemo, useEffect } from "react";
import InputForm from "../UI/InputForm/InputForm";
import TitleNumber from "../TitleNumber/TitleNumber";
import TasksWithFilter from "../TasksWithFilter/TasksWithFilter";
import { currentFilter, currentPage, currentToDoList, numberOfActiveTasks } from "../../redux/selectors";
import { addTask, setList } from "../../redux/toDoList";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { AppGlobalStyle, AppWrapper } from "./AppWrapper";
import '../../styles/imports.css';
import { ThemeProvider } from "styled-components";
import { myTheme } from "../../styles/theme";
import { getTodos, addTodo } from "../../api/todoApi";

const App: React.FC = () => {

  const toDoList = useAppSelector(currentToDoList);
  const filter = useAppSelector(currentFilter);
  const curPage = useAppSelector(currentPage);
  const activeTasks = useAppSelector(numberOfActiveTasks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        const res = await getTodos(filter, curPage);
        console.log("I recompiled!")
        dispatch(setList({
          todos: res.todos,
          numberOfPages: res.pages,
          activeTasks: res.activeTasks,
        }));
      } catch (err) {
        console.log(`Error! Unable to get todos! ${err}`);
      }
    })();
  }, [toDoList.length, filter, curPage]);

  const newTask = async (title: string) => {
    if (!title.trim()) return;

    try {
      const requestStatus = await addTodo(title);
      if (requestStatus) dispatch(addTask(title));
    }
    catch (err) {
      console.log(`Error! Unable to make a new task! ${err}`);
    }
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