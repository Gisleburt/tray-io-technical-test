import React from 'react';
import styled from 'styled-components';

const GreenDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 20px;
  
  color: green;
  border: 2px solid black;
  
  p {
    text-align: center;
  }
  
  .jumboCheck {
    font-size: 3rem;
  }
`;

const DoneInfo = (): JSX.Element => (
  <GreenDiv>
    <div className="jumboCheck">✔</div>
    <p>Please verify your email address, you should have received and email from us already!</p>
  </GreenDiv>
);

DoneInfo.displayName = 'DoneInfo';

export default DoneInfo;
