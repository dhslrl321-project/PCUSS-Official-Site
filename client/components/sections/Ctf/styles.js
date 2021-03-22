import styled from 'styled-components';
import { ifProp, theme } from 'styled-tools';

export const Container = styled.section`
  ${theme("shortcuts.flexCenterColumn")};
  margin: ${theme("margin.firstSectionMargin")};
`;

export const LabelGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 480px){
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