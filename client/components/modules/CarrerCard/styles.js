import styled from 'styled-components';
import { theme, ifProp } from 'styled-tools';

export const Container = styled.div`
  ${theme("shortcuts.flexCenter")};
  flex-direction: ${ifProp("isLeft", "row", "row-reverse")};
  @media screen and (max-width: 768px) {
    flex-direction: column; 
  }
`;

export const ImageWrapper = styled.div`
  width: 200px;
  margin: 20px 100px;
  @media screen and (max-width: 480px) {
    margin: 20px 0px;
  }
`;

export const TextWrapper = styled.div`
  ${theme("shortcuts.flexCenter")};
  flex-direction: column;
  margin: 20px 100px;
  width: 450px;
  h3:first-child {
    margin: 15px;
    width: 90%;
  }
  @media screen and (max-width: 480px) {
    margin: 20px 0px;
  }
`;