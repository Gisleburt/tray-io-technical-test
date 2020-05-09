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

const Done = (): JSX.Element => (
  <GreenDiv>
    <div className="jumboCheck">✔</div>
    <p>Please verify your email address, you should have received and email from us already!</p>
  </GreenDiv>
);

Done.displayName = 'Done';

export default Done;
