import styled from 'styled-components';
import { theme } from 'styled-tools';
export const Container = styled.div`
  ${theme("shortcuts.flexCenterColumn")};
`;

export const Wrapper = styled.div`
  width: 450px;
  & + & {
    margin-top: 50px;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;