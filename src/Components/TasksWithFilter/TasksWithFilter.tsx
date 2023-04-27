import React, { useEffect } from 'react';
import Select from "../UI/Select/Select";
import TaskList from "../TaskList/TaskList";
import { LocalStorageTools } from '../../localStorage';
import { useAppSelector } from '../../redux/hooks';
import { currentFilter } from '../../redux/selectors';
import styled from 'styled-components';

const TitileStyled = styled.p`
  text-align: center;
  padding-right: 5px;

  @media screen and (max-width: 400px) {
    font-size: 15px;
  }
`;

const SelectorStyled = styled.div`
  padding-top: 20px;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ContaineStyled = styled.div`
  width: 100%;
    
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-evenly;

  padding-bottom: 30px;
`;


const TasksWithFilter: React.FC = () => {
  const selectedFilter = useAppSelector(currentFilter);

  useEffect(()=>{
    LocalStorageTools.setItemToLocalStorage('filter', selectedFilter);
  }, [selectedFilter])


  return (
    <ContaineStyled>
      <SelectorStyled>
        <TitileStyled>
          Filter of Tasks:
        </TitileStyled>
        <Select
          value={selectedFilter}
        />
      </SelectorStyled>
      <TaskList />
    </ContaineStyled>
  )
}

export default TasksWithFilter;