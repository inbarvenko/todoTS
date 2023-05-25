import { useMemo, useEffect } from "react";
import InputForm from "../UI/InputForm/InputForm";
import TitleNumber from "../TitleNumber/TitleNumber";
import TasksWithFilter from "../TasksWithFilter/TasksWithFilter";
import { setList } from "../../redux/toDoList";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { AppGlobalStyle, AppWrapper } from "./AppWrapper";
import '../../styles/imports.css';
import { ThemeProvider } from "styled-components";
import { myTheme } from "../../styles/theme";
import { getTodos, addTodo } from "../../api/todoApi";
import { getActiveTasksOnPage } from "../../redux/selectors";

const App: React.FC = () => {

  const filter = useAppSelector((state) => state.todoData.filter);
  const currentPage = useAppSelector((state) => state.todoData.currentPage);
  const activeTasks = useAppSelector((state) => state.todoData.activeTasks);
  const activeTasksOnPage = useAppSelector(getActiveTasksOnPage);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getTodos({filter, currentPage}))
      } catch (err) {
        console.log(`Error! Unable to get todos! ${err}`);
      }
    })();
  }, [filter, currentPage, activeTasksOnPage]);

  const newTask = async (title: string) => {
    if (!title.trim()) return;

    try {
      await addTodo(title);
      await dispatch(getTodos({filter, currentPage}))
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