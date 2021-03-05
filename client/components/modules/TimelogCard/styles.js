import styled from 'styled-components';
import { theme } from 'styled-tools';

export const Container = styled.div`
  ${theme("shortcuts.flexCenterColumn")};
  width: 500px;
`;

export const TextWrapper = styled.div`
  ${theme("shortcuts.flexCenterColumn")};
  text-align: center;
  span:first-child {
    font-weight: 500;
  }
  span {
    margin: 10px;
    font-weight: 300;
  }
`;