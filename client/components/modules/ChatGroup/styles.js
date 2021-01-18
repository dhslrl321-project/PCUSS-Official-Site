import styled from 'styled-components';
import { theme } from 'styled-tools';

export const Container = styled.div`
  ${theme("shortcuts.flexCenterColumn")}
  width: 100%;
  justify-content: space-around;
  max-width: 1100px;
`;

export const ChatCardWrapper = styled.div`
  margin: 10px 0;
`;