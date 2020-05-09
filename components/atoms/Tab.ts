import styled from 'styled-components';

export interface TabProps {
  selected?: boolean;
}

export default styled.li<TabProps>`
  border: 1px solid black;
  background-color: ${({ selected }): string => (selected ? 'lightblue' : 'white')}; 
  padding: 2px;
  text-align: center;
`;
