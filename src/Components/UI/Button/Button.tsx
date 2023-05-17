import React from 'react';
import { ButtonWrapper } from './ButtonWrapper';

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
    <ButtonWrapper
      isButtonDisabled={isButtonDisabled}
      onClick={props.onClick}>
      {props.title}
    </ButtonWrapper>
  );
}

export default Button;