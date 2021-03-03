import styled from 'styled-components';
import { theme } from 'styled-tools';

export const Container = styled.div`
  ${theme("shortcuts.flexCenterColumn")};
  align-items: flex-start;
  p {
    line-height: 180%;
    margin-top: 10px;
    font-weight: 300;
  }
`;