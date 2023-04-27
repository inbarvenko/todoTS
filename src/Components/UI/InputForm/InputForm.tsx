import React, { useState } from 'react';
import Button from '../Button/Button';
import styled from 'styled-components';
import { css } from 'styled-components';
import { AvailableButtonTypes } from '../../../types';

const InputStyled = styled.input<{buttonType: AvailableButtonTypes}>`
  font-family:'Montserrat', sans-serif;
  font-size: 16px;
  flex-grow: 1;
  
  height: 20px;
  word-wrap: break-word;

  ${props => (props.buttonType === 'edit') && css`
    background-color: #fffaf9;
    text-align: center;
  `}
`;

const FormStyled = styled.form`
  display: flex;
  align-items: center;
  justify-content:space-evenly;
  flex: 1 auto;
`


interface Props {
  taskTitle: string;
  onClickSave: (title: string) => void;
  isButtonDisabled?: boolean;
  buttonName?: string;
  buttonType?: AvailableButtonTypes;
}

const InputForm: React.FC<Props> = (props) => {
  const {
    buttonName = '',
    buttonType = 'delete',
  } = props;

  const [title, setTitle] = useState(props.taskTitle);

  const saveTaskTitle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    props.onClickSave(title);
    setTitle('');
  };

  const changingTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const returnValue = () => {
    props.onClickSave('');
  }


  return (
    <FormStyled>
      <InputStyled
        autoFocus={true}
        type="text"
        value={title}
        onChange={changingTitle}
        onBlur={returnValue}
        buttonType = {buttonType}
      ></InputStyled>
      <Button
        isButtonDisabled={props.isButtonDisabled}
        onClick={saveTaskTitle}
        title={buttonName}
      />
    </FormStyled>
  )
}

export default InputForm;