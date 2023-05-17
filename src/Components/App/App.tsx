import { useMemo, useEffect } from "react";
import InputForm from "../UI/InputForm/InputForm";
import TitleNumber from "../TitleNumber/TitleNumber";
import TasksWithFilter from "../TasksWithFilter/TasksWithFilter";
import { currentToDoList } from "../../redux/selectors";
import { LocalStorageTools } from "../../localStorage";
import { addTask } from "../../redux/toDoList";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  }
`;

const ComponentsStyled = styled.div`
  font-family:'Montserrat', sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-evenly;

  padding-bottom: 30px;
`;



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
    <ComponentsStyled>
      <GlobalStyle/>
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
    </ComponentsStyled>
  );
}

export default App;