import styled from 'styled-components';
import { theme } from 'styled-tools';

export const Container = styled.div`
  ${theme("shortcuts.flexCenterColumn")};
  align-items: center;
  span {
    line-height: 130%;
  }
  p {
    margin-top: 10px;
    font-weight: 200;
    line-height: 180%;
    color: #a2a2a2;
  }
  margin-top: 25px;
`;