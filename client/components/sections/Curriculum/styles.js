import styled from 'styled-components';
import { theme } from 'styled-tools';

export const Container = styled.section`
  ${theme("shortcuts.flexCenterColumn")};
  margin: ${theme("margin.firstSectionMargin")};
`;

export const LectureWrap = styled.div`
  margin: 20px 0;
`;