import styled from 'styled-components';
import { theme } from 'styled-tools';

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  background: ${theme("palettes.cardBg")};
  margin: 10px;
  padding: 0 20px;
  border-radius: 18px;
  cursor: pointer;
  transition: 0.1s ease;
  :hover {
    color: ${theme("palettes.focusColor")};
  }

  @media screen and (max-width: 480px) {
    margin: 5px;
  }
`;