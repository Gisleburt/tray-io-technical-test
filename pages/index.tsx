import React from 'react';
import styled from 'styled-components';

const HelloContainer = styled.div`
  background-color: hotpink;
`;

export default (): JSX.Element => (
  <HelloContainer>
    Hello, world!
  </HelloContainer>
);
