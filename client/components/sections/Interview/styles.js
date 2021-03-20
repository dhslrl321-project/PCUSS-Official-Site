import styled from 'styled-components';
import { theme } from 'styled-tools';
export const Container = styled.section`
  ${theme("shortcuts.flexCenterColumn")};
  margin: ${theme("margin.firstSectionMargin")};

  /* 이거 없애야함*/
  justify-content: flex-start;
  height: 45vh;
`;