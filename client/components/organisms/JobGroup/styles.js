import styled from 'styled-components';
import { theme } from 'styled-tools';

export const Container = styled.div`
  ${theme("shortcuts.flexCenter")};
  flex-wrap: wrap;
  max-width: 830px;
`;