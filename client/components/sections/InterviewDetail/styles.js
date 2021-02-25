import styled from 'styled-components';
import { theme } from 'styled-tools';
export const Container = styled.section`
  ${theme("shortcuts.flexCenterColumn")};

  & > div:nth-child(2) {
    margin-bottom: 85px;
  }

  margin: ${theme("margin.firstSectionMargin")};
`;