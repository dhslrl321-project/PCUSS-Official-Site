import styled from 'styled-components';
import { theme, ifProp } from 'styled-tools';
import { down } from 'styled-breakpoints';

export const Container = styled.div`
  width: 100vw;
  ${theme("shortcuts.flexCenterColumn")};
`;

export const LabelGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${down("sm")} {
    flex-wrap: wrap;
  }
`;
export const LabelItem = styled.li`
  cursor: pointer;
  list-style: none;
  margin: 15px 15px;
  color: ${ifProp("active", "#4663FF", "#FFFFFF")};
`;
export const ChatWrapper = styled.div`
  margin: 50px 0;
`;