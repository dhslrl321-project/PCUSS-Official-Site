import styled from 'styled-components';
import { theme, ifProp } from 'styled-tools';
import { down } from "styled-breakpoints";
export const Container = styled.div`
  ${theme("shortcuts.flexCenter")};
  flex-direction: ${ifProp("isQuestions", "row", "row-reverse")};
`;

export const ChatIconWrapper = styled.div`
  /* icon left margin 이상함 */
`;


export const ChatBallon = styled.div`
  background: ${ifProp("isQuestions", "#CCCCCC", "#43C670")};
  color: #000;
  padding: 20px;
  border-radius: 10px;
  width: 200px;
`;

export const EmptyColumn = styled.div`
  width: 400px;
  ${down("md")} {
    width: 200px;
  }
  ${down("sm")} {
    width: 50px;
  }
`;