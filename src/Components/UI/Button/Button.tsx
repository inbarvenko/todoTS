import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{isButtonDisabled?: boolean}>`
  border: #f8bfb3;
  width: 60px;
  height: 30px;

  margin-right: 15px;
  margin-left: 15px;

  background-color: #ffd3c9;

  display: ${(props) => props.isButtonDisabled ? 'none' : 'display'};
`;

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