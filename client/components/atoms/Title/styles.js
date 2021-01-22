import styled, { css } from 'styled-components';
import { theme } from "styled-tools";

const defaultStyle = css`
  font-weight: bold;
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