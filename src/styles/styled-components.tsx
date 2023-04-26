import styled from 'styled-components';

export const StyledButton = styled.button<{isButtonDisabled?: boolean}>`
  border: #f8bfb3;
  width: 60px;
  height: 30px;

  margin-right: 15px;
  margin-left: 15px;

  background-color: #ffd3c9;

  display: ${(props) => props.isButtonDisabled ? 'none' : 'display'};
`;

// attrs((props) => {
//   isButtonDisabled: props.isButtonDisabled ? 'none' : 'display'
// })