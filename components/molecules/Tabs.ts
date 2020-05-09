import styled from 'styled-components';
import { ReactElement } from 'react';
import { TabProps } from '../atoms/Tab';

export interface TabsProps {
  children: ReactElement<TabProps>[];
}

export default styled.ol<TabsProps>`
  display: flex;
  width: 100%;
  
  box-shadow: 3px 3px 3px black;
  margin: 0 0 4px 0;
  
  li {
    flex-grow: 1;
  }
`;
