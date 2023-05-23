import { useMemo, useEffect } from "react";
import InputForm from "../UI/InputForm/InputForm";
import TitleNumber from "../TitleNumber/TitleNumber";
import TasksWithFilter from "../TasksWithFilter/TasksWithFilter";
import { currentFilter, currentToDoList } from "../../redux/selectors";
import { setList } from "../../redux/toDoList";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { AppGlobalStyle, AppWrapper } from "./AppWrapper";
import '../../styles/imports.css';
import { ThemeProvider } from "styled-components";
import { myTheme } from "../../styles/theme";
import { getTodos, addTodo } from "../../api/todoApi";

const App: React.FC = () => {

  const toDoList = useAppSelector(currentToDoList);
  const filter = useAppSelector(currentFilter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        const res = await getTodos(filter);

        dispatch(setList(res));
      } catch (err) {
        console.log(`Error! Unable to get todos! ${err}`);
      }
    })();
  }, [toDoList.length, filter]);

  const activeTasks = useMemo(() => {
    const arr = toDoList.filter((item) => !item.completed);
    return arr.length;
  }, [toDoList]);

  const newTask = async (title: string) => {
    if (!title.trim()) return;

    const todos = await addTodo(title);
    console.log(todos);
    dispatch(setList(todos));
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