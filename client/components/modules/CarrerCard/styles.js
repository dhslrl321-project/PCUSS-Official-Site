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
    margin: 40px; 
    margin: 20px 0px;
  }
`;

export const TextWrapper = styled.div`
  ${theme("shortcuts.flexCenter")};
  flex-direction: column;
  width: 400px;
  margin: 20px 100px;
  h3:first-child {
    margin: 15px;
  }
  @media screen and (max-width: 480px) {
    width: 300px;
    margin: 20px 0px;
  }
`;