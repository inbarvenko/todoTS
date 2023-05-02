import styled from "styled-components";

export const ButtonWrapper = styled.button<{isButtonDisabled?: boolean}>`
  border: ${props => props.theme.colors.button__border};
  width: 60px;
  height: 30px;

  margin-right: 15px;
  margin-left: 15px;

  background-color: ${props => props.theme.colors.button__color};

  display: ${(props) => props.isButtonDisabled ? 'none' : 'display'};
`;
