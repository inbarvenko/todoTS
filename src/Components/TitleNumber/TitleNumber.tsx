import React from 'react';
import styled from 'styled-components';

const NameStyled = styled.h3`
  text-align: center;

  font-size: 20px;
`;

const NumberStyled = styled.h2`
  padding-left: 20px;
  color: rgb(252, 141, 113);
`;

const TitleStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding-bottom: 20px;
`

interface Props {
  showText: string;
  showNum: number;
}

const TitleNumber: React.FC<Props> = (props) => {
  return (
    <TitleStyled>
      <NameStyled>{props.showText}</NameStyled>
      <NumberStyled>{props.showNum}</NumberStyled>
    </TitleStyled>
  );
}

export default TitleNumber;