import styled from 'styled-components';
import { theme } from 'styled-tools';

export const Container = styled.section`
  ${theme("shortcuts.flexCenterColumn")};
  background: ${theme("palettes.background")};
`;

export const SuggestionTextWrapper = styled.div`
  ${theme("shortcuts.flexCenterColumn")};
  color: ${theme("palettes.focusColor")};
  margin-top: 80px;
`;
