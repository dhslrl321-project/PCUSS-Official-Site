import styled, { css } from 'styled-components';
import { theme } from "styled-tools";

const defaultStyle = css`
  font-weight: bold;
  letter-spacing: 0.5px;
  line-height: 130%;
  text-align: center;
  @media screen and (max-width: 580px) {
    font-size: calc(${theme("fontSize.MainTitle")} - 0.3rem);
  }
`;
export const MainTitle = styled.h1`
   ${defaultStyle}
   font-size: ${theme("fontSize.MainTitle")};

   @media screen and (max-width: 480px){
    font-size: ${theme("fontSize.MainTitleM")}
  }
`;
export const SubTitle = styled.h3`
  ${defaultStyle}
  font-size: ${theme("fontSize.SubTitle")};

  
  @media screen and (max-width: 480px){
    font-size: ${theme("fontSize.SubTitleM")}
  }
`;