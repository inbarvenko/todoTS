import React from 'react';
import styles from './Button.module.css'
import { StyledButton } from '../../../styles/styled-components';

interface Props {
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isButtonDisabled?: boolean;
}

const Button: React.FC<Props> = (props) => {
  const {
    isButtonDisabled = false,
  } = props;
  return (
    <StyledButton
      isButtonDisabled={isButtonDisabled}
      onClick={props.onClick}>
      {props.title}
    </StyledButton>
  );
}

export default Button;