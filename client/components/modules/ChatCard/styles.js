import styled from 'styled-components';
import { theme, ifProp } from 'styled-tools';

export const Container = styled.div`
  ${theme("shortcuts.flexCenter")};
  flex-direction: ${ifProp("isQuestions", "row", "row-reverse")};
`;

export const ChatIconWrapper = styled.div`
  /* icon left margin 이상함 */
  width: 60px;
  height: auto;
`;


export const ChatBallon = styled.div`
  background: ${ifProp("isQuestions", "#CCCCCC", "#43C670")};
  color: #000;
  padding: 20px;
  line-height: 120%;
  border-radius: 10px;
  width: 200px;
`;

export const EmptyColumn = styled.div`
  width: 400px;
  
  @media screen and (max-width: 768px){
    width: 200px;
  }

  @media screen and (max-width: 480px){
    width: 60px;
  }
`;