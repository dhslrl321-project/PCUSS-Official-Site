import styled from 'styled-components';
import { theme } from 'styled-tools';

export const Container = styled.div`
  ${theme("shortcuts.flexCenterColumn")};
  align-items: center;
  p {
    margin-top: 10px;
    font-weight: 300;
  }
`;