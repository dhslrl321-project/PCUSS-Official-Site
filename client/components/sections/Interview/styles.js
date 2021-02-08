import styled from 'styled-components';
import { theme } from 'styled-tools';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: ${theme("palettes.background")};
`;